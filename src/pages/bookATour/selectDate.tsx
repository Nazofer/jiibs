import { BookingCalendar } from '@/components/bookingCalendar';
import BookingSteps from '@/components/bookingSteps';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SelectSingleEventHandler } from 'react-day-picker';
import BookedTimeContext from '@/context/bookedTime';

const SelectDate: React.FC = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href).pathname;

  const { bookedDate, setBookedDate } = useContext(BookedTimeContext);

  const handleDateSelect: SelectSingleEventHandler = (date) => {
    if (date) {
      setBookedDate(date);
    }
    navigate('/book/time');
  };

  return (
    <section className='max-w-[40rem] w-full m-auto px-10 '>
      <BookingSteps activePage={url} />
      <div className='mt-4 mb-6'>
        <h1 className='heading-1 text-black mb-2'>Book your tour</h1>
        <h3 className='subheading-3 text-black'>Please select a date</h3>
      </div>
      <div className=''>
        <BookingCalendar
          className='w-full'
          mode='single'
          selected={bookedDate}
          onSelect={handleDateSelect}
          fromDate={new Date()}
          footer={
            <h4 className='subheading-3 text-center mt-10'>
              {`Don't see a time? `}
              <Link to='#' className='text-primaryColor underline'>
                Request a tour
              </Link>
            </h4>
          }
        />
      </div>
    </section>
  );
};

export default SelectDate;
