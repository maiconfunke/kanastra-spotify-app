export async function getAccessTokenPublicApi() {
  const res = await fetch('https://api-spotify.mpfunke.com/token');
  const data = await res.json();

  if (!data.access_token) {
    throw new Error('Token não recebido da API');
  }

  return data.access_token;
}