import BookingSteps from '@/components/bookingSteps';
import BookingContext from '@/context/booking';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { HiChevronLeft } from 'react-icons/hi';
import { Button } from '@/components/ui/button';

interface TimeSlot {
  time: string;
  available: boolean;
}

const timeSlots: TimeSlot[] = [
  { time: '10:00', available: true },
  { time: '10:30', available: true },
  { time: '11:00', available: true },
  { time: '11:30', available: true },
  { time: '12:00', available: true },
];

const SelectTime: React.FC = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href).pathname;

  const { bookingDate, setBookingDate } = useContext(BookingContext);
  console.log(bookingDate);

  const handleSetBookedDate = (time: string) => {
    const newTime = bookingDate || new Date();
    const [hours, minutes] = time.split(':');
    newTime.setHours(parseInt(hours, 10));
    newTime.setMinutes(parseInt(minutes, 10));
    console.log(newTime);
    setBookingDate(newTime);

    navigate('/book/confirm');
  };

  useEffect(() => {
    if (!bookingDate) {
      navigate('/book');
    }
  }, [bookingDate, navigate]);

  return (
    <section className='max-w-[40rem] w-full m-auto px-10 '>
      <BookingSteps activePage={url} />
      <div className='mt-4 mb-6'>
        <h1 className='heading-1 text-black mb-2'>Book your tour</h1>
        <p className='subheading-3 text-black'>Pick a time to meet</p>
      </div>
      <div className='relative text-center mb-12'>
        <Link
          to={'/book'}
          className='rounded-full size-8 border-[1.8px] border-darkGray grid place-items-center hover:bg-accent/10 absolute top-0 left-0'
        >
          <HiChevronLeft className='h-5 w-5 text-darkGray' />
        </Link>
        {bookingDate && (
          <>
            <h2 className='heading-2 mb-2'>{format(bookingDate, 'eeee')}</h2>
            <p className='subheading-3'>{format(bookingDate, 'MMM d, yyyy')}</p>
          </>
        )}
      </div>
      <div className='text-center mb-6'>
        <h2 className='heading-2 mb-2'>SELECT A TIME</h2>
        <p className='subheading-3'>Eastern Standart Time (EST)</p>
      </div>
      <div>
        {timeSlots.map((slot) => (
          <Button
            key={slot.time}
            variant={slot.available ? 'booking' : 'outline'}
            className='w-full mb-4'
            disabled={!slot.available}
            onClick={() => handleSetBookedDate(slot.time)}
          >
            {slot.time}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SelectTime;
