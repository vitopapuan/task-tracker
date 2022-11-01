import { FaTrash } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`flex justify-between items-center p-4 my-2 border rounded-lg hover:cursor-pointer ${task.reminder && 'border-l-8 border-green-700'}`} onDoubleClick={() => onToggle(task.id)}>
      <div>
        <h3 className='font-medium '>{task.text}</h3>
        <p className='font-light'>{task.day}</p>
      </div>
      <FaTrash className='fill-red-500 hover:cursor-pointer' onClick={() => onDelete(task.id)}/>
    </div>
  );
};

export default Task;
