
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div >
      <h1 className="todo-header">Todo List</h1>
     
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTaskTitle = e.target.elements.title.value;
          addTask(newTaskTitle);
          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="New Task" required />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <div className="task-buttons"></div>
            <button onClick={() => editTask(task.id, prompt('Edit task:', task.title))}>
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
