import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form
      className='my-2'
      onSubmit={onSubmit}>
      <div>
        <p>Task</p>
        <input
          type='text'
          placeholder='Add Task'
          className='w-full font-light border p-1 mt-1 rounded-md'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='my-2'>
        <p>Time</p>
        <input
          type='text'
          placeholder='Set Time'
          className='w-full font-light border p-1 mt-1 rounded-md'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='flex my-2'>
        <span className='mr-4'>Reminder</span>
        <input
          type='checkbox'
          className='w-[16px] h-[16px] self-center'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
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
