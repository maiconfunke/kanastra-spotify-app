import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { finishLogin } from "../auth/spotify";

export default function SpotifyCallback() {
    const [search] = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const code = search.get("code");
        const err = search.get("error");
        if (err) {
            setError(err);
            return;
        }
        if (!code) {
            setError("Código de autorização ausente.");
            return;
        }
        (async () => {
            try {
                await finishLogin(code);
                navigate("/", { replace: true });
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError("Erro ao finalizar login.");
                }
            }

        })();
    }, [search, navigate]);

    if (error) return <div>Erro: {error}</div>;
    return <div>Finalizando login…</div>;
}
