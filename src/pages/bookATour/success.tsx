import BookingContext from '@/context/booking';
import { format } from 'date-fns';
import React, { useContext, useEffect } from 'react';
import {
  BsCalendar2Fill,
  BsCheckCircleFill,
  BsClockFill,
  BsFillPinAngleFill,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
  const navigate = useNavigate();
  const { bookingDate } = useContext(BookingContext);

  useEffect(() => {
    if (!bookingDate) {
      navigate('/book/confirm');
    }
  }, [bookingDate, navigate]);

  return (
    <section className='max-w-[40rem] w-full m-auto px-10 '>
      <div className='mt-[5rem] mb-10 flex flex-col items-center'>
        <BsCheckCircleFill className='size-[90px] text-primaryColor mb-10' />
        <h1 className='heading-1 text-black mb-2'>Confirmed</h1>
        <p className='subheading-3 text-black'>You are scheduled</p>
      </div>
      <div className='flex flex-col px-[6.25rem] gap-[17px]'>
        <p className='flex items-center gap-3 subheading-3'>
          <BsClockFill className='size-6' />
          30 Minute Meeting
        </p>
        {bookingDate && (
          <p className='flex items-center gap-3 subheading-3'>
            <BsCalendar2Fill className='size-6' />
            {format(bookingDate, 'PPp')}
          </p>
        )}
        <p className='flex items-center gap-3 subheading-3'>
          <BsFillPinAngleFill className='size-6' />
          70 Pine Street, New york, 10019
        </p>
      </div>
    </section>
  );
};

export default Success;
