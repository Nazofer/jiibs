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

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(4, { message: 'Must have a minimum of 4 letters' }),
});

type LoginForm = z.infer<typeof formSchema>;

const LoginModal = NiceModal.create(() => {
  const modal = useModal();

  const form = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    form.reset();
  };

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={() => {
        modal.hide();
      }}
    >
      <DialogContent className='p-0 gap-0 max-w-[400px] w-full'>
        <h1 className='heading-3 text-center py-3 font-semibold'>
          Log in to JIIBS.
        </h1>
        <Separator className='' />
        <div className='py-[30px] px-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default LoginModal;
