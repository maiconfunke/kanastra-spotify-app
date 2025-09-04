import { useEffect, useState } from "react";
import { getFeaturedArtists } from "../auth/spotify";
import { SpotifyCard } from "../components/ui/Card";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string }[];
  genres: string[];
}


export default function Home() {

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFeaturedArtists();
      setArtists(data);
    })();
  }, []);

  return <div className='w-full'>
    <h1 className="px-4 py-8 text-white text-lg font-bold">Artistas</h1>


<main className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Artistas em destaque</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {artists.map((artist: SpotifyArtist) => (
          <div key={artist.id} className="bg-neutral-800 p-4 rounded-lg text-white hover:bg-neutral-700 transition">
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="rounded-full aspect-square object-cover mb-3 shadow-md"
            />
            <h3 className="text-lg font-semibold">{artist.name}</h3>
            <p className="text-sm text-neutral-400">{artist.genres.join(', ')}</p>
          </div>
        ))}
      </div>
    </main>





    <div className="px-6">
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
      
      
      {[...Array(10)].map((_, i) => (

        <div key={i}>
          <SpotifyCard
            coverUrl="https://picsum.photos/300/200"
            title="Pela Última Vez - Ao Vivo"
            subtitle="Grupo Menos É Mais, NATTAN"
          />
        </div>

      ))}
    </div>
    </div>
    
  </div>



}
