import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import Account from '@/assets/icons/account.svg?react';

export interface AccountCardProps {
  title: string;
  subtitle: string;
  path: string;
}

const AccountCard: React.FC<AccountCardProps> = ({ title, subtitle, path }) => {
  return (
    <Link to={path}>
      <Card>
        <Account className='mb-6' />
        <h3 className='heading-3 mb-3'>{title}</h3>
        <p className='heading-4 text-darkGray'>{subtitle}</p>
      </Card>
    </Link>
  );
};

export default AccountCard;
