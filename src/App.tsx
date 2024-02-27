import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Building from './pages/building';
import Units from './pages/units';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='flex h-full'>
              <Sidebar />
              <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem]'>
                Home
              </div>
            </div>
          }
        />
        <Route
          path='/building'
          element={
            <div className='flex h-full'>
              <Sidebar />
              <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem]'>
                <Building />
              </div>
            </div>
          }
        />
        <Route
          path='/units'
          element={
            <div className='flex h-full'>
              <Sidebar />
              <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem]'>
                <Units />
              </div>
            </div>
          }
        />
        <Route
          path='*'
          element={
            <div className='flex h-full'>
              <Sidebar />
              <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem]'>
                Not Found
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
