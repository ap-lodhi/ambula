import React, { useState } from "react";
import "./todo.css";

function Todo() {
  //use state for storing the task.
  //task with an id, content, and completed flag
  const [data, setData] = useState([]);

  //   console.log(data);

  // this is also similar for taking to input ans set
  const [newTask, setNewTask] = useState("");

  //The handleInputChange function is triggered when the user types in the input field, 
  //updating the newTask state. The handleAddTask function is called when the 
  //user clicks the "Add Task" button, adding the new task to the tasks state array.

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
// this funtion will add the task 
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setData([
        ...data,
        { id: Date.now(), content: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  // this the for checking if task is complete or not 

  const handleCompleteTask = (taskId) => {
    setData(
      data.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };


  // this function for removing if we want we can remove the task  
  const handleRemoveTask = (taskId) => {
    setData(data.filter((task) => task.id !== taskId));
  };

  const totalTasks = data.length;
  const completedTasks = data.filter((task) => task.completed).length;

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


            {/* here is mapped all the data which will reflect on ui  */}
          {data.map((task) => (
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
