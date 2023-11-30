import React, { useState } from 'react';
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
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setIsEdit(!editTask)
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDone = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <form className='tasks__single' onSubmit={(e) => handleEdit(e, task.id)}>
      {isEdit ? (
        <input className='tasks__single--text' value={editTask} onChange={(e) => setEditTask(e.target.value)} />
      ) : task.isDone ? (
        <s className='tasks__single--text'>{task.task}</s>
      ) : (
        <span className='tasks__single--text'>{task.task}</span>
      )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!isEdit && !task.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
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
