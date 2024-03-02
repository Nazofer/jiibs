import { createContext, useState } from 'react';

interface BookedTimeContextData {
  bookedDate?: Date;
  setBookedDate: (date: Date | undefined) => void;
}

const BookedTimeContext = createContext<BookedTimeContextData>(
  {} as BookedTimeContextData
);

export default BookedTimeContext;

interface BookedTimeProviderProps {
  children: React.ReactNode;
}

export const BookedTimeProvider: React.FC<BookedTimeProviderProps> = ({
  children,
}) => {
  const [bookedDate, setBookedDate] = useState<Date | undefined>();

  return (
    <BookedTimeContext.Provider value={{ bookedDate, setBookedDate }}>
      {children}
    </BookedTimeContext.Provider>
  );
};
