import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';

export default function CompletedTasks({ tasks, onComplete, onDelete, onEdit }) {
  const completedTasks = tasks.filter((task) => task.completed);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <>
      {completedTasks.length === 0 && (
        <p style={{ color: "#ccc" }}>No completed tasks yet.</p>
      )}

      {completedTasks.map((task, index) => (
        <div className="task-card" key={task.id}>
          <div className="task-header" style={{ color: "green" }}>
            Task {index + 1}
          </div>

          <div className="task-desc">
            {editId === task.id ? (
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
                if (editId === task.id) {
                  onEdit(task.id, editText);
                  setEditId(null);
                  setEditText("");
                } else {
                  setEditId(task.id);
                  setEditText(task.text);
                }
              }}
            >
              {editId === task.id ? <SaveIcon /> : <EditIcon />}
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
