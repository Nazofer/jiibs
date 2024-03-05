import React from 'react';
import { Input } from '../ui/input';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='py-[1.125rem]'>
      <div className='max-w-[86.5625rem] m-auto flex items-center justify-between'>
        <h2 className='heading-1 text-primaryColor'>JIIBS.</h2>
        <div className='max-w-[25rem] w-full flex items-center relative'>
          <Input
            className='rounded-[6.1875rem] pl-[60px] bg-transparent'
            placeholder='Search Apartments'
          />
          <HiSearch className='size-6 cursor-pointer text-darkGray absolute left-6 -z-10' />
        </div>
        <div className='flex items-center gap-4'>
          <Link to='#'>
            <HiOutlineMail className='size-6 cursor-pointer' />
          </Link>
          <Link to='#'>
            <HiOutlineHeart className='size-6 cursor-pointer' />
          </Link>
          <Link to='/account'>
            <HiOutlineUserCircle className='size-6 cursor-pointer' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
