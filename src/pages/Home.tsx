import { SpotifyCard } from "../components/ui/Card";

export default function Home() {
  return <div className='w-full'>
    <h1 className="px-4 py-8 text-white text-lg font-bold">Artistas</h1>
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
