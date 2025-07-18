import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';

import Navbar from "./components/Navbar";
import AllTasks from "./components/AllTasks";
import CompletedTasks from "./components/CompletedTasks";
import UncompletedTasks from "./components/UncompletedTasks";

import "./components/tasks.css";
import "./components/Navbar.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <h1 className="title">To Do List</h1>
        <Navbar />

        <div className="task-input">
          <input
            type="text"
            placeholder="Enter your task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button className="new-task-btn" onClick={handleAddTask}>
            ➕ New task
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route
            path="/all"
            element={
              <AllTasks
                tasks={tasks}
                onComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            }
          />
          <Route
            path="/select"
            element={
              <CompletedTasks
                tasks={tasks}
                onComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            }
          />
          <Route
            path="/not"
            element={
              <UncompletedTasks
                tasks={tasks}
                onComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
