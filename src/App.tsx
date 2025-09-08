import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/layout/Menu';
import PageWrapper from './components/layout/PageWrapper';
// import Header from './components/layout/Header';
import AppRouter from './routes/Router';


// function App() {
//   return (
//     <Router>
//       <Header />
//       <div className='flex flex-col lg:flex-row min-h-screen mt-18'>
//         <div className='w-full lg:w-64 lg:h-auto h-20 fixed bottom-0 lg:static'>
//           <Menu />
//         </div>
//         <div className='flex-grow bg-neutral-900 text-white p-6 min-h-screen pb-20 lg:pb-0'>
//           <PageWrapper>
//            <AppRouter />
//           </PageWrapper>
//         </div>
//       </div>
//     </Router>
//   );
// }



// App.tsx
export default function App() {
  return (
    // root: ocupa a tela e impede scroll global; só o <main> rola
    <div className="h-screen bg-neutral-900 text-neutral-100 overflow-hidden">
      {/* Header: fixo no topo em todas as larguras */}
      <Header />

      {/* Desktop layout (>= md): grid com sidebar fixa */}
      <div className="hidden md:grid md:h-screen md:grid-rows-[64px_1fr] md:grid-cols-[280px_1fr]">
          <header className="col-span-2 border-b border-neutral-800 px-6 flex items-center">
    <Header />
  </header>


        <aside className="border-r border-neutral-800 p-4 overflow-y-auto">
          <SidebarContent />
        </aside>

        {/* Conteúdo (única área rolável) */}
        <main className="overflow-y-auto p-6">
          <Content />
         
        </main>
      </div>

      {/* Mobile layout (< md): header fixo + conteúdo + bottom nav fixa */}
      <div className="md:hidden relative">
        {/* Espaço para o header fixo (64px) */}
        <div className="pt-[64px]" />
        {/* Altura do conteúdo = viewport - header (64) - bottom (64) - safe areas */}
        <main
          className="overflow-y-auto px-4 pb-[calc(64px+env(safe-area-inset-bottom))]"
          style={{
            height:
              "calc(100vh - 64px - 64px - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
          }}
        >
          <Content />
          <div className="h-6" />
        </main>

        {/* Bottom nav fixa */}
        <MobileBottomNav />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-30 h-16 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur
px-4 flex items-center justify-between"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-neutral-700" />
        <span className="font-semibold">My Spotify UI</span>
      </div>

      <div className="hidden sm:flex items-center gap-2">
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          className="bg-neutral-800/70 placeholder-neutral-400 rounded px-3 py-2 text-sm outline-none focus:ring-2 ring-neutral-700"
        />
        <button className="rounded-full bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700">
          Perfil
        </button>
      </div>
    </header>
  );
}

function SidebarContent() {
  return (
    <div className="flex h-full flex-col">
      <nav className="space-y-1 text-sm">
        <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="#">Início</a>
        <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="#">Buscar</a>
        <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="#">Sua Biblioteca</a>
      </nav>

      <div className="mt-6 space-y-1 text-sm">
        <button className="w-full text-left rounded px-3 py-2 hover:bg-neutral-800">Criar playlist</button>
        <button className="w-full text-left rounded px-3 py-2 hover:bg-neutral-800">Músicas curtidas</button>
      </div>

      <div className="mt-6 text-xs uppercase text-neutral-400">Playlists</div>
      {/* <ul className="mt-2 space-y-1 text-sm">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i} className="rounded px-3 py-2 hover:bg-neutral-800 cursor-pointer">
            Playlist #{i + 1}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

function Content() {
  return (
    <>
      <section>
        <h2 className="text-xl font-bold">Boas-vindas</h2>
        <p className="text-neutral-400 mt-1">Descubra playlists e artistas recomendados para você.</p>

        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <article key={i} className="rounded-md bg-neutral-800/60 p-4 hover:bg-neutral-800 transition">
              <div className="aspect-square w-full rounded-md bg-neutral-700" />
              <h3 className="mt-3 font-semibold line-clamp-1">Album / Playlist {i + 1}</h3>
              <p className="text-sm text-neutral-400 line-clamp-2">
                Descrição curta da playlist/álbum com alguns detalhes.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold">Artistas populares</h2>
        <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <article key={i} className="rounded-md bg-neutral-800/60 p-4 hover:bg-neutral-800 transition">
              <div className="aspect-square w-full rounded-full bg-neutral-700" />
              <h3 className="mt-3 font-semibold line-clamp-1">Artista {i + 1}</h3>
              <p className="text-sm text-neutral-400">Artista</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function MobileBottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-30 h-16 border-t border-neutral-800 bg-neutral-900/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid h-full grid-cols-3 text-xs">
        <li className="flex flex-col items-center justify-center gap-1 hover:bg-neutral-800/40">
          <span className="h-5 w-5 rounded bg-neutral-600" />
          Início
        </li>
        <li className="flex flex-col items-center justify-center gap-1 hover:bg-neutral-800/40">
          <span className="h-5 w-5 rounded bg-neutral-600" />
          Buscar
        </li>
        <li className="flex flex-col items-center justify-center gap-1 hover:bg-neutral-800/40">
          <span className="h-5 w-5 rounded bg-neutral-600" />
          Biblioteca
        </li>
      </ul>
    </nav>
  );
}
