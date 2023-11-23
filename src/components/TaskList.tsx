import React from 'react';
import { Tasks } from './model';

interface Props {
  tasks: Tasks[];
  // I got the setTasks data type by hovering on setTasks prop
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </div>
  );
};

export default TaskList;
