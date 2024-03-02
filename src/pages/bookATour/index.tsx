import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

const BookATour: React.FC = () => {
  return (
    <div className='h-full overflow-y-auto'>
      <Header></Header>
      <main className='min-h-[100%] -mb-[400px]'>Main</main>
      <Footer></Footer>
    </div>
  );
};

export default BookATour;
