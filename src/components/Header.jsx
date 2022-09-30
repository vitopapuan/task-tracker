import React from 'react';
import { FaPlusCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='font-sans font-semibold text-[32px]'>Task Tracker</h1>
      <FaPlusCircle className='w-[32px] h-[32px] cursor-pointer add-task' />
    </header>
  );
};

export default Header;