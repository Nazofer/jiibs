import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BookingProvider } from './context/booking.tsx';
import { UserProvider } from './context/auth.tsx';
import NiceModal from '@ebay/nice-modal-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BookingProvider>
        <NiceModal.Provider>
          <App />
        </NiceModal.Provider>
      </BookingProvider>
    </UserProvider>
  </React.StrictMode>
);
