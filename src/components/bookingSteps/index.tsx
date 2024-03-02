import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  activePage: string;
}

interface Step {
  number: number;
  title: string;
  page: string;
}

const bookingSteps: Step[] = [
  {
    number: 1,
    title: 'Select Date',
    page: '/book',
  },
  {
    number: 2,
    title: 'Meeting Time',
    page: '/book/time',
  },
  {
    number: 3,
    title: 'Confirm Meeting',
    page: '/book/confirm',
  },
];

const BookingSteps: React.FC<Props> = ({ activePage }) => {
  return (
    <div className='pt-6 pb-4 flex justify-between items-center'>
      {bookingSteps.map((step, index) => (
        <div key={index} className='flex gap-3'>
          <div
            className={twMerge(
              'size-6 rounded-full grid place-items-center',
              activePage === step.page ? 'bg-[#2AB7DD]' : 'bg-[#77E2FF]'
            )}
          >
            <span className='text-white text-[10px]'>{step.number}</span>
          </div>
          <h2
            className={twMerge(
              'paragraph-1',
              activePage === step.page ? 'text-black' : 'text-darkGray'
            )}
          >
            {step.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BookingSteps;
