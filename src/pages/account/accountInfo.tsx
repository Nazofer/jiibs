import React, { useState } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import PersonalInfoItem from '@/components/personalInfoItem';
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
  password: z.string().min(4).optional(),
});

type AccountForm = z.infer<typeof formSchema>;

const AccountInfo: React.FC = () => {
  const [isLegalNameEditing, setIsLegalNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const form = useForm<AccountForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@test.com',
      phone: '1234567890',
      password: 'password',
    },
  });

  const onLegalNameSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsLegalNameEditing(!isLegalNameEditing);
  };

  const onEmailSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsEmailEditing(!isEmailEditing);
  };

  const onPhoneSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsPhoneEditing(!isPhoneEditing);
  };

  const onPasswordSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setIsPasswordEditing(!isPasswordEditing);
  };

  const LegalNameForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onLegalNameSubmit)}>
        <div className='flex gap-[3.25rem] mb-5'>
          <FormItem className='w-full'>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input
                placeholder='Enter first name:'
                {...form.register('firstName')}
              />
            </FormControl>
          </FormItem>
          <FormItem className='w-full'>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input
                placeholder='Enter last name:'
                {...form.register('lastName')}
              />
            </FormControl>
          </FormItem>
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
        <FormItem className='w-[50%] mb-5'>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder='Enter email:' {...form.register('email')} />
          </FormControl>
        </FormItem>
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  const PhoneForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPhoneSubmit)}>
        <FormItem className='w-[50%] mb-5'>
          <FormLabel>Phone</FormLabel>
          <FormControl>
            <Input placeholder='Enter phone:' {...form.register('phone')} />
          </FormControl>
        </FormItem>
        <Button variant='secondary' type='submit'>
          Save
        </Button>
      </form>
    </Form>
  );

  const PasswordForm = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPasswordSubmit)}>
        <FormItem className='w-[50%] mb-5'>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              placeholder='Enter password:'
              {...form.register('password')}
              type='password'
            />
          </FormControl>
        </FormItem>
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
          setIsLegalNameEditing(isEditing);
        }}
      />
      <PersonalInfoItem
        label='Email'
        value={form.getValues('email')!}
        form={EmailForm}
        isEditing={isEmailEditing}
        setIsEditing={(isEditing) => {
          setIsEmailEditing(isEditing);
        }}
      />
      <PersonalInfoItem
        label='Phone'
        value={form.getValues('phone')!}
        form={PhoneForm}
        isEditing={isPhoneEditing}
        setIsEditing={(isEditing) => {
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
          setIsPasswordEditing(isEditing);
        }}
      />
    </section>
  );
};

export default AccountInfo;
