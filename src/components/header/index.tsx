import React from 'react';
import { Input } from '../ui/input';
// import { HiOutlineMail } from 'react-icons/hi';
// import { HiOutlineHeart } from 'react-icons/hi';
// import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiSearch } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import SignupModal from '../modals/signup';
import LoginModal from '../modals/login';
import NiceModal from '@ebay/nice-modal-react';
import { IoPersonSharp, IoPersonCircleSharp } from 'react-icons/io5';
import VerifyEmailModal from '../modals/verifyEmail';

const Header: React.FC = () => {
  const showLoginModal = () => {
    NiceModal.show(LoginModal);
  };

  const showSignupModal = () => {
    NiceModal.show(SignupModal);
  };

  const showVerifyEmailModal = () => {
    NiceModal.show(VerifyEmailModal);
  };

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
          {/* TODO: add condition to check if user is logged in */}

          {/* <Link to='#'>
            <HiOutlineMail className='size-6 cursor-pointer' />
          </Link>
          <Link to='#'>
            <HiOutlineHeart className='size-6 cursor-pointer' />
          </Link>
          <Link to='/account'>
            <HiOutlineUserCircle className='size-6 cursor-pointer' />
          </Link> */}
          <Button variant='auth' onClick={showLoginModal}>
            <IoPersonSharp className='size-4' />
            Login
          </Button>
          <Button variant='auth' onClick={showSignupModal}>
            <IoPersonCircleSharp className='size-5' />
            Sign Up
          </Button>
          {/* TEMPORARY */}

          <Button variant='auth' onClick={showVerifyEmailModal}>
            Verify Email
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
