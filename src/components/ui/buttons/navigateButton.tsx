import React from 'react';
import RightArrow from '@/assets/icons/right-arrow.svg?react';
import { Button } from '../button';

const NavigateButton: React.FC = () => {
  return (
    <div className='flex w-20'>
      <Button className='rounded-r-none'>
        <RightArrow className='rotate-90 w-3 h-3' />
      </Button>
      <Button className='rounded-l-none'>
        <RightArrow className='-rotate-90 w-3 h-3' />
      </Button>
    </div>
  );
};

export default NavigateButton;
