import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const passwordTest = z
  .string()
  .min(4, { message: 'Must have a minimum of 4 letters' });

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Must have a minimum of 2 letters' }),
    lastName: z
      .string()
      .min(2, { message: 'Must have a minimum of 2 letters' }),
    email: z.string().email({ message: 'Invalid email format' }),
    password: passwordTest,
    confirmPassword: passwordTest,
  })
  .refine(
    (data) => {
      if (data.password || data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    { message: 'Passwords do not match', path: ['confirmPassword'] }
  );

type SignupForm = z.infer<typeof formSchema>;

const SignupModal = NiceModal.create(() => {
  const modal = useModal();

  const form = useForm<SignupForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignupForm) => {
    form.reset();
    modal.hide();
  };

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={() => {
        modal.hide();
        form.reset();
      }}
    >
      <DialogContent className='p-0 gap-0 max-w-[400px] w-full'>
        <h1 className='heading-3 text-center py-3 font-semibold'>
          Sign up to JIIBS.
        </h1>
        <Separator />
        <div className='py-[30px] px-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex gap-4 mb-4'>
                <FormField
                  name='firstName'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input placeholder='First Name:' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='lastName'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormControl>
                        <Input placeholder='Last Name:' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col gap-4 mb-6'>
                <FormField
                  name='email'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder='Email Address:' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='password'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='Password:'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name='confirmPassword'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type='password'
                          placeholder='Confirm Password:'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className='w-full' variant='secondary' type='submit'>
                Create my account
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default SignupModal;
