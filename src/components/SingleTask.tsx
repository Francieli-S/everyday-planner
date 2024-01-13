import React, { useEffect, useRef, useState } from 'react';
import { Task } from '../model';
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineDoneOutline,
} from 'react-icons/md';
import './style.css';
import { Draggable } from 'react-beautiful-dnd';

// COME BACK TO THIS COMPONENT TO ADD useReducer

interface Props {
  task: Task;
  index: number
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, index, tasks, setTasks }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const inputRef = useRef<HTMLInputElement>(null)

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setIsEdit(!editTask)
  };

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])

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
    <Draggable draggableId={task.id} index={index}>
      {(provided) =>  (
        <form className='tasks__single' onSubmit={(e) => handleEdit(e, task.id)} 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
      {isEdit ? (
        <input ref={inputRef} className='tasks__single--text' value={editTask} onChange={(e) => setEditTask(e.target.value)} />
      ) : task.isDone ? (
        // tag s is strike to make the text with a line on it
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
      )}
    
    </Draggable>
  );
};

export default SingleTask;
