import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Page {
  name: string;
  path: string;
}

interface Props {
  pages: Page[];
  className?: string;
}

const Breadcrumbs: React.FC<Props> = ({ pages, className }) => {
  return (
    <nav className={twMerge('flex gap-3 items-center', className)}>
      {pages.map((page, index) => (
        <div key={index} className='flex gap-3 items-center'>
          <Link to={page.path} className='heading-4 text-darkGray'>
            {page.name}
          </Link>
          {index < pages.length - 1 && (
            <HiChevronRight className='text-darkGray size-6' />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
