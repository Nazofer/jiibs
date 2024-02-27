import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface MenuButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  page: string;
  variant?: 'default' | 'icon';
}

const MenuButton: React.FC<MenuButtonProps> = ({
  children,
  icon,
  page,
  variant,
}) => {
  return (
    <NavLink
      to={page}
      type='button'
      className={({ isActive }) =>
        twMerge(
          'w-full py-2 px-4 rounded-md text-[#999B9F] flex gap-2 hover:text-black transition-all duration-200 ease-in-out',
          isActive && 'text-black bg-[#F3F4F6]'
        )
      }
    >
      <span>{icon}</span>
      {variant === 'default' && <span>{children}</span>}
    </NavLink>
  );
};

export default MenuButton;
