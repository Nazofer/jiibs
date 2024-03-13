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
import SignupModal from './signup';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(4, { message: 'Must have a minimum of 4 letters' }),
});

type LoginForm = z.infer<typeof formSchema>;

const LoginModal = NiceModal.create(() => {
  const modal = useModal();

  const showSignupModal = () => {
    modal.hide();
    NiceModal.show(SignupModal);
  };

  const form = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginForm) => {
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
          Log in to JIIBS.
        </h1>
        <Separator />
        <div className='py-[30px] px-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mb-[30px]'>
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
              </div>
              <Button className='w-full' variant='secondary' type='submit'>
                Authorize
              </Button>
            </form>
            <div className='flex flex-col items-center'>
              <p className='paragraph-2 mb-3'>Don't have account?</p>
              <Button variant='secondaryOutline' onClick={showSignupModal}>
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default LoginModal;
