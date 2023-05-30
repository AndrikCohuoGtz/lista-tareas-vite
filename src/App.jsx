import React, { useState } from 'react';
import styles from './App.module.css'
import './App.css'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <div className='title'>
        <h1>ToDo</h1>
        <h2>Drag & Drop</h2>
      </div>
      <input type="text" value={newTask} onChange={handleInputChange} className='text-box'
      placeholder='Tarea nueva...'/>
      <div className='buttons'>
        <button className='button Add' onClick={addTask}>Añadir tarea</button>
        <button className='button Dele' onClick={deleteCompletedTasks}>Borrar completados</button>
      </div>
      <ul className='container-works'>
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => toggleTask(index)}
            className={`${styles.task} ${task.completed ? styles.completed : ''}`}
          >
            {task.name}
          </div>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoList;