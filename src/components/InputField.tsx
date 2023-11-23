import React, { useRef } from 'react';
import './style.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ task, setTask, handleAdd }) => {
  // I got the useRef data type by hovering on <input>
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
      // logs current: input.input__box
    }}>
      <input
        ref={inputRef}
        className='input__box'
        type='input'
        placeholder='Enter a task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='input_submit' type='submit'>
        <span>Add</span>
      </button>
    </form>
  );
};

export default InputField;
