import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Building from './pages/building';
import Units from './pages/units';
import SelectDate from './pages/bookATour/selectDate';
import Header from './components/header';
import Footer from './components/footer';
import SelectTime from './pages/bookATour/selectTime';
import Confirm from './pages/bookATour/confirm';
import Success from './pages/bookATour/success';
import Account from './pages/account';
import AccountInfo from './pages/account/accountInfo';

interface Page {
  page: string;
  children: React.ReactNode;
}

const urgentPages: Page[] = [
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
    children: <div className='heading-2 text-center'>404</div>,
  },
];

const bookATourPages: Page[] = [
  {
    page: '/book',
    children: <SelectDate />,
  },
  {
    page: '/book/time',
    children: <SelectTime />,
  },
  {
    page: '/book/confirm',
    children: <Confirm />,
  },
  {
    page: '/book/success',
    children: <Success />,
  },
  {
    page: '/book/*',
    children: <div className='heading-2 text-center'>404</div>,
  },
];

const accountPages: Page[] = [
  {
    page: '/account',
    children: <Account />,
  },
  {
    page: '/account/info',
    children: <AccountInfo />,
  },
  {
    page: '/account/*',
    children: <div className='heading-2 text-center'>404</div>,
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Urgent Pages */}
        {urgentPages.map((page) => (
          <Route
            key={page.page}
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
        {/* Book A Tour Pages */}
        {bookATourPages.map((page) => (
          <Route
            key={page.page}
            path={page.page}
            element={
              <div className='h-full overflow-y-auto'>
                <Header />
                <main className='content-with-header'>{page.children}</main>
                <Footer />
              </div>
            }
          />
        ))}
        {/* Account Pages */}
        {accountPages.map((page) => (
          <Route
            key={page.page}
            path={page.page}
            element={
              <div className='h-full overflow-y-auto'>
                <Header />
                <main className='content-with-header'>{page.children}</main>
              </div>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
