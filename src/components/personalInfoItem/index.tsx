import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { twMerge } from 'tailwind-merge';

interface Props {
  label: string;
  value: string;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  form: React.ReactNode;
  isValueHidden?: boolean;
}

const hideValue = (value: string) => {
  return value.replace(/./g, '*');
};

const PersonalInfoItem: React.FC<Props> = ({
  label,
  value,
  isEditing,
  setIsEditing,
  form,
  isValueHidden,
}) => {
  return (
    <div>
      <div
        className={twMerge(
          'flex justify-between',
          isEditing ? 'items-start' : 'items-center'
        )}
      >
        <h3 className='heading-4 font-semibold mb-2'>{label}</h3>
        {isEditing ? (
          <Button
            variant='ghost'
            className='text-[1.375rem] font-semibold  text-darkGray hover:text-darkGray'
            type='button'
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </Button>
        ) : (
          <Button
            variant='ghost'
            className='text-[1.375rem] font-semibold  text-darkGray hover:text-darkGray'
            type='button'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </div>
      {isEditing ? (
        form
      ) : (
        <p className='heading-4 text-darkGray '>
          {isValueHidden ? hideValue(value) : value}
        </p>
      )}
      <Separator className='my-6' />
    </div>
  );
};

export default PersonalInfoItem;
