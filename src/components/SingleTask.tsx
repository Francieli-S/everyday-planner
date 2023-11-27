import React from 'react'
import { Task } from '../model';
import { MdOutlineEdit, MdOutlineDelete, MdOutlineDoneOutline } from "react-icons/md";
import './style.css';

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<Props> = ({ task, tasks, setTasks }: Props) => {
  return (
    <form className='tasks__single'>
        <span className='tasks__single--text'>{task.task}</span>
        <div>
            <span className='icon'><MdOutlineEdit /></span>
            <span className='icon'><MdOutlineDelete /></span>
            <span className='icon'><MdOutlineDoneOutline /></span>
        </div>


    </form>
  )
}

export default SingleTask