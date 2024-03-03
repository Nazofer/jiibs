import BookingSteps from '@/components/bookingSteps';
import BookingContext from '@/context/booking';
import { format } from 'date-fns';
import React, { useContext, useEffect } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { BsClockFill } from 'react-icons/bs';
import { BsCalendar2Fill } from 'react-icons/bs';
import { BsFillPinAngleFill } from 'react-icons/bs';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
});

export type BookingForm = z.infer<typeof formSchema>;

const Confirm: React.FC = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href).pathname;
  const { bookingDate, setBookingDetails } = useContext(BookingContext);

  useEffect(() => {
    if (!bookingDate) {
      navigate('/book/time');
    }
  }, [bookingDate, navigate]);

  const form = useForm<BookingForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  const onSubmit = (data: BookingForm) => {
    // console.log(data);
    setBookingDetails(data);
    navigate('/book/success');
  };

  return (
    <section className='max-w-[40rem] w-full m-auto px-10 '>
      <BookingSteps activePage={url} />
      <div className='mt-4 mb-6'>
        <h1 className='heading-1 text-black mb-2'>Book your tour</h1>
        <p className='subheading-3 text-black'>
          Enter your details and book the meeting
        </p>
      </div>
      <div className='relative pl-[3.5rem] mb-12'>
        <Link
          to={'/book/time'}
          className='rounded-full size-8 border-[1.8px] border-darkGray grid place-items-center hover:bg-accent absolute top-0 left-0'
        >
          <HiChevronLeft className='h-5 w-5 text-darkGray' />
        </Link>
        <h2 className='heading-4 font-semibold mb-6'>Summary</h2>
        <div className='flex flex-col gap-[17px]'>
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
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-6'
        >
          <h2 className='subheading-1 font-semibold'>Enter Details</h2>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex justify-between items-center'>
                  {'Name *'}
                  <FormMessage className='h-[14px]' />
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Enter your name:'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex justify-between items-center'>
                  {'Email *'}
                  <FormMessage className='h-[14px]' />
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Enter your email:'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant='secondary' type='submit'>
            Book a Tour
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Confirm;
