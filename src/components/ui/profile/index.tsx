import React from 'react';
import Avatar from '@/assets/Profile.png';
import Logout from '@/assets/icons/arrow-right-from-bracket.svg?react';

const Profile: React.FC = () => {
  return (
    <div>
      <div className='w-15 h-15 p-1.5 flex items-center gap-3'>
        <img src={Avatar} alt='Avatar' />
        <div className=''>
          <p className='paragraph-1 font-semibold'>Anagram Nomad</p>
          <p className='paragraph-3 text-darkGray'>Logout</p>
        </div>
        <Logout className='text-[#999B9F] ml-auto cursor-pointer' />
      </div>
    </div>
  );
};

export default Profile;
