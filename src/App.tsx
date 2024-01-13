import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Task } from './model';
import { v4 as uuidV4 } from 'uuid';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (task) {
      setTasks([...tasks, {id: uuidV4(), task, isDone: false  }])
      setTask('')
    }
  }

  // function to handle drag and drop source and destination:
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    // these vars as used to set states below instead of the state directly
    let add
    const active = tasks
    const complete = completedTasks    

    if(source.droppableId === 'TasksList') {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    if(destination.droppableId === 'TasksList') {
      active.splice(destination.index, 0, add)
    } else {
      complete.splice(destination.index, 0, add)
    }

    setTask(active)
    setCompletedTasks(complete)

    console.log(result)
  }
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className='App'>
      <span className='heading'>Everyday Planner</span>
      <InputField
        task={task}
        setTask={setTask}
        handleAdd={handleAdd}
      />
      <TaskList 
        tasks={tasks}
        setTasks={setTasks}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
    </div>
    </DragDropContext>
  );
};

export default App;
