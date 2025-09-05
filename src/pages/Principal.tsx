import { useEffect, useState } from "react";
import { useArtists, useTrendingMusics } from "../hooks/useArtists";

export default function Home() {
 const [searchTerm] = useState("rock");
  const { data: data1 } = useArtists(searchTerm);
  const { data: data2 } = useTrendingMusics();

  useEffect(() => {
    if (data1) {
      console.log(data1)
      const top10 = data1.slice(0, 10);
      console.log("🎧 Top 10 artistas encontrados:", top10);
    }
  }, [data1]);

  useEffect(() => {
    if (data2) {
      console.log("🎧 Trending:", data2);
    }
  }, [data2]);


  return <div>🏠 Página Inicial</div>;
}
