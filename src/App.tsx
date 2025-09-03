import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import PageWrapper from './components/PageWrapper';
import { lazy, Suspense } from 'react';
import HomeLoader from './pages/HomeLoader';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));


function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <div className="w-1/8 bg-black text-white p-4">
          <Menu />
        </div>
        <div className="w-7/8 bg-neutral-900 text-white p-6">
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