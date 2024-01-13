import React from 'react';
import { Task } from '../model';
import './style.css';
import SingleTask from './SingleTask';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  tasks: Task[];
  // I got the setTasks data type by hovering on setTasks prop
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TasksList'>
        {(provided) => (
          <div
            className='tasks'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='task__heading'>Active Tasks</span>
            {provided.placeholder}
            {tasks.map((task, index) => (
              <SingleTask
                key={task.id}
                task={task}
                index={index}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='CompletedTasksList'>
        {(provided) => (
          <div
            className='tasks completed'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='task__heading'>Completed Tasks</span>
            {provided.placeholder}
            {completedTasks.map((task, index) => (
              <SingleTask
                key={task.id}
                task={task}
                index={index}
                tasks={completedTasks}
                setTasks={setCompletedTasks}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
