import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className={`flex justify-between items-center p-4 my-2 border rounded-lg ${task.reminder && 'border-l-8 border-green-700'}`}>
      <div>
        <h3 className='font-medium '>{task.text}</h3>
        <p className='font-light'>{task.day}</p>
      </div>
      <FaTrash className='fill-red-500' />
    </div>
  );
};

export default Task;
