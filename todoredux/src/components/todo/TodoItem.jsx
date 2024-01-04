import React, { useState } from "react";
import okLogo from "../../assets/ok.gif";
import deleteLogo from "../../assets/delete.gif";
import editLogo from "../../assets/edit.gif";

const TodoItem = ({ completed, text, id, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(text); // Reset the edited text if canceled
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "olive",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      {!isEditing ? (
        <div>
          <h2 className="todoText">{text}</h2>
          <div>
            <span>
              <img
                src={okLogo}
                className="ok-logo"
                alt="ok logo"
                onClick={handleToggle}
                title="ok"
              />
            </span>
            <span>
              <img
                src={deleteLogo}
                className="delete-logo"
                alt="delete logo"
                onClick={handleDelete}
                title="delete"
              />
            </span>
            <span>
              <img
                src={editLogo}
                className="edit-logo"
                alt="edit logo"
                onClick={handleEdit}
                title="edit"
                width="80"
                height="80"
              />
            </span>
          </div>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
