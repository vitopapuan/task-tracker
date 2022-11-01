import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <section className='my-6'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </section>
  );
};

export default Tasks;
