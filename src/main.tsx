import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BookingProvider } from './context/booking.tsx';
import { UserProvider } from './context/auth.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BookingProvider>
        <App />
      </BookingProvider>
    </UserProvider>
  </React.StrictMode>
);
