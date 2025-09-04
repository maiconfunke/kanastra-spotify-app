import { Play } from 'lucide-react';

type SpotifyCardProps = {
  coverUrl: string;
  title: string;
  subtitle: string; // Ex.: "Grupo Menos É Mais, NATTAN"
  onClick?: () => void;
};

export function SpotifyCard({ coverUrl, title, subtitle, onClick }: SpotifyCardProps) {
  return (
    <div className='hover:bg-neutral-800 rounded-lg shadow p-4 text-white cursor-pointer group'>
      <div className="relative">
        <img
          src={coverUrl}
          alt={title}
          className="
        aspect-square w-full rounded-full object-cover
        shadow-md
      "
        />
        
        <button
          className="
        absolute bottom-2 right-2 bg-green-500 text-white p-4 rounded-full
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        hover:bg-green-600
      "
        >
          <Play strokeWidth={0} fill="black" />
        </button>
      </div>

      <h3 className='text-lg mt-2'>Creed</h3>
      <p className='text-neutral-400'>Artista</p>
    </div>
  );
}