import React from 'react';
import { Task } from '../model';
import './style.css';
import SingleTask from './SingleTask';

interface Props {
  tasks: Task[];
  // I got the setTasks data type by hovering on setTasks prop
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }: Props) => {
  return (
    <div className='tasks'>
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
