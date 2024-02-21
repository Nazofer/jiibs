import React from 'react';
import MenuButton from '@/components/ui/buttons/menuButton';
import Home from '@/assets/icons/home.svg?react';
import Building from '@/assets/icons/building.svg?react';
import Units from '@/assets/icons/units.svg?react';
import Inbox from '@/assets/icons/inbox.svg?react';
import ProfileIcon from '@/assets/icons/profile.svg?react';
import Calendar from '@/assets/icons/calendar.svg?react';
import Help from '@/assets/icons/circle-question.svg?react';
import Profile from '../profile';
import { Separator } from '../separator';

interface MenuButtons {
  page: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Buttons: MenuButtons[] = [
  {
    page: '/',
    icon: <Home />,
    children: 'Home',
  },
  {
    page: '/building',
    icon: <Building />,
    children: 'Building',
  },
  {
    page: '/units',
    icon: <Units />,
    children: 'Units',
  },
  {
    page: '/inbox',
    icon: <Inbox />,
    children: 'Inbox',
  },
  {
    page: '/analytics',
    icon: <ProfileIcon />,
    children: 'Analytics',
  },
  {
    page: '/leads',
    icon: <Calendar />,
    children: 'Leads',
  },
  {
    page: '/help',
    icon: <Help />,
    children: 'Help Center',
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className='pt-[60px] px-[15px] pb-[20px] max-w-[17.4375rem] w-full'>
      <h2 className='heading-1 text-primaryColor mb-[1.875rem]'>JIIBS.</h2>
      <nav className='flex flex-col gap-3 mb-40'>
        {Buttons.map((button, index) => (
          <MenuButton key={index} page={button.page} icon={button.icon}>
            {button.children}
          </MenuButton>
        ))}
      </nav>
      <Separator className='mb-3' />
      <Profile />
    </aside>
  );
};

export default Sidebar;
