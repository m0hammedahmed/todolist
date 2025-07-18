import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';

export default function AllTasks({ tasks, onDelete, onComplete, onEdit }) {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <>
      {tasks.length === 0 && <p style={{ color: "#ccc" }}>No tasks yet.</p>}

      {tasks.map((task, index) => (
        <div className="task-card" key={task.id}>
          <div
            className="task-header"
            style={{ color: task.completed ? "green" : "red" }}
          >
            Task {index + 1}
          </div>

          <div className="task-desc">
            {editTaskId === task.id ? (
              <div className="edit-row">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                  rows={2}
                />
              </div>
            ) : (
              <span>{task.text}</span>
            )}
          </div>

          <div className="task-icons">
            <button onClick={() => onDelete(task.id)}>
              <DeleteIcon />
            </button>

            <button
              onClick={() => {
                if (editTaskId === task.id) {
                  onEdit(task.id, editText);
                  setEditTaskId(null);
                  setEditText("");
                } else {
                  setEditTaskId(task.id);
                  setEditText(task.text);
                }
              }}
            >
              {editTaskId === task.id ? <SaveIcon /> : <EditIcon />}
            </button>

            <button onClick={() => onComplete(task.id)}>
              <CheckCircleIcon />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
