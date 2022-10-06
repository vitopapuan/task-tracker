import { useState } from 'react';
import { Header, AddTask, Tasks } from './components';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: 'June 24 3.00 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pick up Kids',
      day: 'June 25 2.00 pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'June 25 3.30 pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'Family Dinner',
      day: 'June 25 7.00 pm',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className='container'>
      <div className='flex h-screen w-screen'>
        <div className='min-w-[400px] min-h-[600px] m-auto shadow-xl rounded-xl border-2 px-[35px] py-[28px]'>
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          <AddTask />
          <Tasks tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default App;
