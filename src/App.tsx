import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Building from './pages/building';
import Units from './pages/units';

interface Page {
  page: string;
  children: React.ReactNode;
}

const pages: Page[] = [
  {
    page: '/',
    children: <div>Home</div>,
  },
  {
    page: '/building',
    children: <Building />,
  },
  {
    page: '/units',
    children: <Units />,
  },
  {
    page: '*',
    children: <div>404</div>,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {pages.map((page, index) => (
          <Route
            key={index}
            path={page.page}
            element={
              <div className='flex h-full'>
                <Sidebar />
                <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem] bg-lightGray overflow-y-scroll'>
                  {page.children}
                </div>
              </div>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
