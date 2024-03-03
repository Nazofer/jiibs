import { BookingForm } from '@/pages/bookATour/confirm';
import { createContext, useState } from 'react';

interface BookingContextData {
  bookingDate?: Date;
  setBookingDate: (date: Date | undefined) => void;
  bookingDetails?: BookingForm;
  setBookingDetails: (details: BookingForm) => void;
}

const BookingContext = createContext<BookingContextData>(
  {} as BookingContextData
);

export default BookingContext;

interface BookingProviderProps {
  children: React.ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({
  children,
}) => {
  const [bookingDate, setBookingDate] = useState<Date | undefined>();
  const [bookingDetails, setBookingDetails] = useState<BookingForm>(
    {} as BookingForm
  );

  return (
    <BookingContext.Provider
      value={{ bookingDate, setBookingDate, bookingDetails, setBookingDetails }}
    >
      {children}
    </BookingContext.Provider>
  );
};
