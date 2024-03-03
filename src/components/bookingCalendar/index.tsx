import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function BookingCalendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4 w-full',
        caption: 'flex justify-between pt-1 relative items-center mb-6',
        caption_label: 'heading-4 font-semibold',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'rounded-full size-8 border-[1.8px] border-darkGray grid place-items-center hover:bg-accent'
        ),
        nav_button_previous: 'absolute right-11',
        nav_button_next: 'absolute right-0',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex justify-between mt-10 mb-4',
        head_cell:
          'text-black rounded-md w-9 font-normal text-4 uppercase w-[55px]',
        row: 'flex w-full mt-2 justify-between',
        cell: 'h-[55px] w-[55px] rounded-full text-center text-4 p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: 'h-[55px] w-[55px] p-0 font-normal aria-selected:opacity-100 rounded-full text-4 hover:bg-accent aria-selected:bg-[#E7F3FB]',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[#E7F3FB] text-[#317AE0] font-bold hover:bg-[#E7F3FB] hover:text-[#317AE0] focus:bg-[#E7F3FB] focus:text-[#317AE0]',
        day_today: '',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50 hover:bg-transparent',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <HiChevronLeft className='h-5 w-5 text-darkGray' />,
        IconRight: () => <HiChevronRight className='h-5 w-5 text-darkGray' />,
      }}
      {...props}
    />
  );
}
BookingCalendar.displayName = 'Calendar';

export { BookingCalendar };
