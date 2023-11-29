import React from 'react';
import { Task } from '../model';
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineDoneOutline,
} from 'react-icons/md';
import './style.css';

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }: Props) => {

  const handleDelete = (id: string) => {
    setTasks(
      tasks.filter(task =>
        task.id !== id)
    )
  }

  const handleDone = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <form className='tasks__single'>
      {task.isDone ? (
        <s className='tasks__single--text'>{task.task}</s>
      ) : (
        <span className='tasks__single--text'>{task.task}</span>
      )}

      <div>
        <span className='icon'>
          <MdOutlineEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(task.id)}>
          <MdOutlineDelete />
        </span>
        <span className='icon' onClick={() => handleDone(task.id)}>
          <MdOutlineDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
