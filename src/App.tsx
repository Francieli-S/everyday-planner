import React, { useState } from "react"
import './App.css'
import InputField from "./components/InputField"

const App: React.FC = () => {
  const [task, setTask] = useState<string>('')
  
  return (
    <div className="App">
      <span className="heading">Everyday Planner</span>
      <InputField task={task} setTask={setTask}/>
    </div>
  )
}

export default App


