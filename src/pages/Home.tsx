export default function Home() {
  return <div className='w-full px-6'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
    {[...Array(10)].map((_, i) => (
      <div key={i} className='bg-neutral-800 rounded-lg shadow p-6 text-white transition-all duration-300 ease-in-out transform hover:scale-[1.02]'>
        <h3 className='text-xl font-bold mb-2'>Card {i + 1}</h3>
        <p className='text-neutral-400'>Conteúdo do card.</p>
      </div>
    ))}
  </div>
</div>



}
