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
    <div className='container'>
      <div className='tasks'>
        <span className='task__heading'>Active Tasks</span>
        {tasks.map((task) => (
          <SingleTask
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
      <div className='tasks completed'>
        <span className='task__heading'>Completed Tasks</span>
        {tasks.map((task) => (
          <SingleTask
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
