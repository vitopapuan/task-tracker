import Task from './Task';

const Tasks = ({tasks}) => {
  return (
    <section className='my-6'>
      {tasks.map((task, index) => (
        <Task key={index} task={task}/>
      ))}
    </section>
  );
};

export default Tasks;
