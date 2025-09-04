import { generateCodeChallenge, generateCodeVerifier } from "./pkce";
import { getAccessTokenPublicApi } from "./public-api-token";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
console.log(CLIENT_ID)
const REDIRECT_URI =
  (import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string) ||
  `${window.location.origin}/callback`;

const SCOPES = ["user-read-email", "user-read-private", "user-top-read"].join(
  " "
);

const STORAGE = {
  verifier: "sp_pkce_verifier",
  token: "sp_token",
};

type TokenPayload = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number; // segundos
  refresh_token?: string;
  scope?: string;
  obtained_at: number; // epoch ms
};

function saveToken(token: TokenPayload) {
  localStorage.setItem(STORAGE.token, JSON.stringify(token));
}
function readToken(): TokenPayload | null {
  const raw = localStorage.getItem(STORAGE.token);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TokenPayload;
  } catch {
    return null;
  }
}
function isExpired(token: TokenPayload, skewSec = 30) {
  const ageSec = (Date.now() - token.obtained_at) / 1000;
  return ageSec >= token.expires_in - skewSec;
}

// 1) Iniciar login: gera PKCE e redireciona
export async function startLogin() {
  const verifier = generateCodeVerifier();
  localStorage.setItem(STORAGE.verifier, verifier);
  const challenge = await generateCodeChallenge(verifier);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    code_challenge_method: "S256",
    code_challenge: challenge,
  });
  window.location.href =
    "https://accounts.spotify.com/authorize?" + params.toString();
}

// 2) Trocar "code" por access_token (no /callback)
export async function finishLogin(authCode: string) {
  const verifier = localStorage.getItem(STORAGE.verifier);
  if (!verifier) throw new Error("Code verifier ausente (fluxo PKCE).");

  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "authorization_code",
    code: authCode,
    redirect_uri: REDIRECT_URI,
    code_verifier: verifier,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Falha ao obter token: ${res.status} ${err}`);
  }
  const json = await res.json();
  const token: TokenPayload = {
    access_token: json.access_token,
    token_type: json.token_type,
    expires_in: json.expires_in,
    refresh_token: json.refresh_token,
    scope: json.scope,
    obtained_at: Date.now(),
  };
  saveToken(token);
  localStorage.removeItem(STORAGE.verifier);
  return token;
}

// 3) Refresh token
export async function refreshToken() {
  const current = readToken();
  if (!current?.refresh_token) throw new Error("Sem refresh_token salvo.");
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "refresh_token",
    refresh_token: current.refresh_token,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error("Falha no refresh.");
  const json = await res.json();

  const next: TokenPayload = {
    access_token: json.access_token,
    token_type: "Bearer",
    expires_in: json.expires_in,
    refresh_token: json.refresh_token ?? current.refresh_token,
    scope: json.scope ?? current.scope,
    obtained_at: Date.now(),
  };
  saveToken(next);
  return next;
}

// 4) Obter token válido (faz refresh se necessário)
export async function getValidAccessToken() {
  let token = readToken();
  if (!token) return null;
  if (isExpired(token)) token = await refreshToken();
  return token.access_token;
}

// 5) Logout
export function logout() {
  localStorage.removeItem(STORAGE.token);
  localStorage.removeItem(STORAGE.verifier);
}

// 6) Exemplo de chamada autenticada
export async function getMyProfile() {
  const access = await getValidAccessToken();
  if (!access) throw new Error("Não autenticado.");
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${access}` },
  });
  if (!res.ok) throw new Error("Falha ao buscar perfil.");
  return res.json();
}

export async function getFeaturedArtists() {
  const token = await getAccessTokenPublicApi();

  const res = await fetch(
    'https://api.spotify.com/v1/search?q=rock&type=artist&limit=8',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  return data.artists.items;
}