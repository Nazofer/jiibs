import NavigateButton from '@/components/ui/buttons/navigateButton';
import React from 'react';
import { Button } from '@/components/ui/button';

const Building: React.FC = () => {
  return (
    <div className='flex justify-end gap-5'>
      <Button>Publish</Button>
      <Button>View</Button>
      <NavigateButton />
    </div>
  );
};

export default Building;
