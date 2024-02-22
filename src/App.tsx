import Sidebar from './components/ui/sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Building from './pages/building';

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
          path='*'
          element={
            <div className='flex h-full'>
              <Sidebar />
              <div className='h-full w-full pt-[3.75rem] px-[1.875rem] pb-[1.875rem]'>
                Not Found
              </div>
            </div>
          }
        />{' '}
        {/* Add the Not Found route */}
      </Routes>
    </Router>
  );
}

export default App;
