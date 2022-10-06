import { useState } from "react";

const AddTask = () => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  return (
    <form className='my-2'>
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
      <div className='my-2'>
        <p>Reminder</p>
        <input
          type='checkbox'
          className='w-[16px] h-[16px]'
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
