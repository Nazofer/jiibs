import AccountCard, { AccountCardProps } from '@/components/accountCard';
import React from 'react';

const cards: AccountCardProps[] = [
  {
    title: 'Personal info',
    subtitle: 'Edit your personal profiles',
    path: '/account/profile',
  },
  {
    title: 'Tours & Open Houses',
    subtitle: 'Manage your schedule ',
    path: '#',
  },
  {
    title: 'Inbox',
    subtitle: 'Check and send all messages',
    path: '#',
  },
  {
    title: 'Liked Properties',
    subtitle: 'Manage all likes properties ',
    path: '#',
  },
  {
    title: 'Custom Optimization ',
    subtitle: 'Edit your personal profiles',
    path: '#',
  },
  {
    title: 'Log Out',
    subtitle: 'Edit your personal profiles',
    path: '#',
  },
];

const Account: React.FC = () => {
  return (
    <section className='max-w-[87.5rem] w-full m-auto mt-10'>
      <h1 className='heading-2 mb-[3.125rem]'>Account</h1>
      <div className='grid grid-cols-3 gap-10'>
        {cards.map((card, index) => (
          <AccountCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Account;
