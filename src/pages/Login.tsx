import { startLogin } from "../auth/spotify";

export default function Login() {
    return (
        <main style={{ padding: 24 }}>
            <h1>Entrar com Spotify</h1>
            <button onClick={() => startLogin()}>Conectar Spotify</button>
        </main>
    );
}