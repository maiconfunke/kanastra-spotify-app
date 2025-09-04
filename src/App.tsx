import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import PageWrapper from './components/PageWrapper';
import { lazy, Suspense } from 'react';
import HomeLoader from './pages/HomeLoader';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));


function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen mt-18">
        <div className="w-full lg:w-48 bg-black text-white p-4 lg:h-auto h-20 fixed bottom-0 lg:static flex flex-row lg:flex-col items-center">
          <Menu />
        </div>
        <div className="flex-grow bg-neutral-900 text-white p-6 min-h-screen pb-20 lg:pb-0">
          <PageWrapper>
            <Suspense fallback={<HomeLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </Suspense>
          </PageWrapper>
        </div>
      </div>
    </Router>
  );
}
export default App;