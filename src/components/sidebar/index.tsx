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
import { Separator } from '../ui/separator';
import { GoSidebarCollapse } from 'react-icons/go';
import { twMerge } from 'tailwind-merge';

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
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={twMerge(
        'pt-[60px] px-[15px] pb-[20px] w-full',
        isCollapsed ? 'max-w-[80px]' : 'max-w-[17.4375rem]'
      )}
    >
      <div className='flex justify-between items-center mb-[1.875rem]'>
        {!isCollapsed && (
          <h2 className='heading-1 text-primaryColor'>JIIBS.</h2>
        )}
        <GoSidebarCollapse
          className='size-6 text-[#999B9F] rotate-180 cursor-pointer'
          onClick={handleCollapse}
        />
      </div>
      <nav className='flex flex-col gap-3 mb-40'>
        {Buttons.map((button, index) => (
          <MenuButton
            key={index}
            page={button.page}
            icon={button.icon}
            variant={isCollapsed ? 'icon' : 'default'}
          >
            {button.children}
          </MenuButton>
        ))}
      </nav>
      {!isCollapsed && (
        <>
          <Separator className='mb-3' />
          <Profile />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
