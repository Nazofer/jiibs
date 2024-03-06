import React, { useContext, useState } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import PersonalInfoItem from '@/components/personalInfoItem';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import UserContext from '@/context/auth';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Name must have a minimum of 2 letters' })
    .optional(),
  lastName: z
    .string()
    .min(2, { message: 'Name must have a minimum of 2 letters' })
    .optional(),
  email: z.string().email({ message: 'Invalid email format' }).optional(),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: 'Invalid phone number' })
    .optional(),
  password: z
    .string()
    .min(4, { message: 'Password must have a minimum of 4 letters' })
    .optional(),
});

type AccountForm = z.infer<typeof formSchema>;

const AccountInfo: React.FC = () => {
  const { user, partialSetUser } = useContext(UserContext);

  const [isLegalNameEditing, setIsLegalNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const form = useForm<AccountForm>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
  });

  const onLegalNameSubmit = (values: z.infer<typeof formSchema>) => {
    partialSetUser({ firstName: values.firstName, lastName: values.lastName });
    setIsLegalNameEditing(!isLegalNameEditing);
  };

  const onEmailSubmit = (values: z.infer<typeof formSchema>) => {
    partialSetUser({ email: values.email });
    setIsEmailEditing(!isEmailEditing);
  };

  const onPhoneSubmit = (values: z.infer<typeof formSchema>) => {
    partialSetUser({ phone: values.phone });
    setIsPhoneEditing(!isPhoneEditing);
  };

  const onPasswordSubmit = (values: z.infer<typeof formSchema>) => {
    partialSetUser({ password: values.password });
    setIsPasswordEditing(!isPasswordEditing);
  };

  console.log(form.formState.errors);

  const LegalNameForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLegalNameSubmit)}>
        <div className='flex gap-[3.25rem] mb-5'>
          <FormField
            name='firstName'
            control={form.control}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  First Name
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder='Enter first name:' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name='lastName'
            control={form.control}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>
                  Last Name
                  <FormMessage />
                </FormLabel>
                <FormControl>
                  <Input placeholder='Enter last name:' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  const EmailForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onEmailSubmit)}>
        <FormField
          name='email'
          control={form.control}
          render={({ field }) => (
            <FormItem className='w-[50%] mb-5'>
              <FormLabel>
                Email
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder='Enter email:' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  const PhoneForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPhoneSubmit)}>
        <FormField
          name='phone'
          control={form.control}
          render={({ field }) => (
            <FormItem className='w-[50%] mb-5'>
              <FormLabel>
                Phone
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input placeholder='Enter phone:' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  const PasswordForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPasswordSubmit)}>
        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem className='w-[50%] mb-5'>
              <FormLabel>
                Password
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter password:'
                  {...field}
                  type='password'
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  return (
    <section className='max-w-[87.5rem] w-full m-auto mt-10'>
      <h1 className='heading-2 mb-2'>Personal info</h1>
      <Breadcrumbs
        pages={[
          { name: 'Account', path: '/account' },
          { name: 'Personal info', path: '/account/info' },
        ]}
        className='mb-[3.75rem]'
      />
      <PersonalInfoItem
        label='Legal Name'
        value={`${form.getValues('firstName')} ${form.getValues('lastName')}`}
        form={LegalNameForm}
        isEditing={isLegalNameEditing}
        setIsEditing={(isEditing) => {
          if (!isEditing) {
            form.resetField('firstName');
            form.resetField('lastName');
          }
          setIsLegalNameEditing(isEditing);
        }}
      />
      <PersonalInfoItem
        label='Email'
        value={form.getValues('email')!}
        form={EmailForm}
        isEditing={isEmailEditing}
        setIsEditing={(isEditing) => {
          !isEditing && form.resetField('email');
          setIsEmailEditing(isEditing);
        }}
      />
      <PersonalInfoItem
        label='Phone'
        value={form.getValues('phone')!}
        form={PhoneForm}
        isEditing={isPhoneEditing}
        setIsEditing={(isEditing) => {
          !isEditing && form.resetField('phone');
          setIsPhoneEditing(isEditing);
        }}
      />
      <PersonalInfoItem
        label='Password'
        value={form.getValues('password')!}
        isValueHidden
        form={PasswordForm}
        isEditing={isPasswordEditing}
        setIsEditing={(isEditing) => {
          !isEditing && form.resetField('password');
          setIsPasswordEditing(isEditing);
        }}
      />
    </section>
  );
};

export default AccountInfo;
