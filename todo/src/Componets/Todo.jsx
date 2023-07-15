import React, { useState } from "react";
import './todo.css'

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), content: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className="input-box"
        />
        <button onClick={handleAddTask} className="add-btn">
          Add Task
        </button>
        <h2>Total tasks: {totalTasks}</h2>
        <h2>Completed tasks: {completedTasks}</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleteTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
               {task.content}
              </span>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="rm-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
