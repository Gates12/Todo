import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTask([...task, { id: Date.now(), text: newTask }])
      setNewTask('')
    }
  }

  const handleDeleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (
    <>
      <div>
        <h1> Todo App </h1>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder='Enter a new Task'
          > </input>

        </div>
        <button
          onClick={handleAddTask}
        > Add Task</button>
      </div>

      <ul>
        {
          task.map((task) =>
            <li key={task.id}>
              {task.text}
              <button
                onClick={() => handleDeleteTask(task.id)}
              > Delete
              </button>
            </li>
          )}
      </ul >
    </>
  )
}

export default App
