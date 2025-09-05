import { Card } from "../components/ui/Card";
import { useArtists } from "../hooks/useArtists";
import { usePlaylistsTracks } from "../hooks/usePlaylists";
import type { SpotifyArtist, SpotifyTrack } from "../types";

export default function Home() {
  const { data: artists = [] } = useArtists('sertanejo', 10);
  const { data: tracks = [] } = usePlaylistsTracks('5bKoH0s8rTnFLanGOKCgI8', 10);

  return (
    <div className='w-full'>
      <h1 className="px-6 py-8 text-white text-2xl font-bold">Músicas em alta</h1>
      <div className="px-6">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {tracks.map((track: SpotifyTrack, i: number) => (
            <div key={i}>
              <Card
                coverUrl={track.preview}
                title={track.name}
                subtitle={track.artist}
              />
            </div>
          ))}
        </div>
      </div>

      <h1 className="px-4 py-8 text-white text-2xl font-bold">Artistas populares</h1>
      <div className="px-6">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {artists.map((artist: SpotifyArtist, i: number) => (
            <div key={i}>
              <Card
                coverUrl={artist.images[0]?.url}
                title={artist.name}
                subtitle='Artista'
                shape='circle'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
