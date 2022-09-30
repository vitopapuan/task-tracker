import React from 'react';

const AddTask = () => {
  return (
    <form className='my-2'>
      <div>
        <p>Task</p>
        <input
          type='text'
          placeholder='Add Task'
          className='w-full font-light border p-1 mt-1 rounded-md'
        />
      </div>
      <div className='my-2'>
        <p>Time</p>
        <input
          type='text'
          placeholder='Set Time'
          className='w-full font-light border p-1 mt-1 rounded-md'
        />
      </div>
      <div className='my-2'>
        <p>Reminder</p>
        <input
          type='checkbox'
          className='w-[16px] h-[16px]'
        />
      </div>
      <div className='my-2'>
        <input
          type='Submit'
          value='Add Task'
          className='w-full p-2 rounded-md text-white bg-slate-700 hover:bg-slate-600 active:bg-slate-800 focus:ring'
        />
      </div>
    </form>
  );
};

export default AddTask;
