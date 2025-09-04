import { useEffect, useState } from "react";

type SpotifyUser = {
    id: string;
    display_name: string;
    email: string;
    country: string;
    product: string; // tipo de conta (free / premium)
    images: { url: string }[];
};

export default function Profile() {
    const [user, setUser] = useState<SpotifyUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = JSON.parse(localStorage.getItem("sp_token") || "{}")?.access_token;
                if (!token) throw new Error("Token não encontrado, faça login novamente.");

                const res = await fetch("https://api.spotify.com/v1/me", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.ok) {
                    const err = await res.text();
                    throw new Error(`Erro ${res.status}: ${err}`);
                }

                const data = await res.json();
                setUser(data);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError("Erro ao finalizar login 2222.");
                }
            }
        };

        fetchProfile();
    }, []);

    if (error) return <div style={{ color: "red" }}>Erro: {error}</div>;
    if (!user) return <div>Carregando informações do usuário...</div>;

    return (
        <main style={{ padding: 24 }}>
            <h1>Perfil do Spotify</h1>
            {user.images?.[0]?.url && (
                <img
                    src={user.images[0].url}
                    alt="Avatar"
                    style={{ width: 120, borderRadius: "50%", marginBottom: 16 }}
                />
            )}
            <ul>
                <li><strong>ID:</strong> {user.id}</li>
                <li><strong>Nome:</strong> {user.display_name}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>País:</strong> {user.country}</li>
                <li><strong>Tipo de conta:</strong> {user.product}</li>
            </ul>
        </main>
    );
}