import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import { Tasks } from './model';
import { v4 as uuidV4 } from 'uuid';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Tasks[]>([]);

  console.log(tasks)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (task) {
      setTasks([...tasks, {id: uuidV4(), task, isDone: false  }])
      setTask('')
    }
  }

  return (
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
      />
    </div>
  );
};

export default App;
