import { useEffect, useState } from "react";
import { useArtists } from "../hooks/useArtists";

export default function Home() {
 const [searchTerm] = useState("Daft Punk");
  const { data } = useArtists(searchTerm);

  useEffect(() => {
    if (data) {
      const top10 = data.slice(0, 10);
      console.log("🎧 Top 10 artistas encontrados:", top10);
    }
  }, [data]);


  return <div>🏠 Página Inicial</div>;
}
