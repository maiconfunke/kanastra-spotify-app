import { BrowserRouter as Router  } from 'react-router-dom';
import Menu from './components/layout/Menu';
import PageWrapper from './components/layout/PageWrapper';
import Header from './components/layout/Header';
import AppRouter from './routes/Router';


function App() {
  return (
    <Router>
      <Header />
      <div className='flex flex-col lg:flex-row min-h-screen mt-18'>
        <div className='w-full lg:w-64 lg:h-auto h-20 fixed bottom-0 lg:static'>
          <Menu />
        </div>
        <div className='flex-grow bg-neutral-900 text-white p-6 min-h-screen pb-20 lg:pb-0'>
          <PageWrapper>
           <AppRouter />
          </PageWrapper>
        </div>
      </div>
    </Router>
  );
}
export default App;