import React, { useState } from "react";
import { TodoItemProps } from "../types";

export const TodoItem = ({todo,onDelete,onEdit} :TodoItemProps ) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center justify-between border-[1px] border-gray-400 rounded-md px-4 py-2">
          <input
            className="border-[1px] border-gray-300 rounded-md px-2 py-1"
            type="text"
            value={editedText}
            onChange={handleChange}
          />
          <div className="flex items-center gap-2">
            <button
              className="bg-blue-400 text-white rounded-md px-4 py-1"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="bg-rose-400 text-white rounded-md px-4 py-1"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between border-[1px] border-gray-400 rounded-md px-4 py-2">
          <span>{todo.text}</span>
          <div className="flex items-center gap-2">
            <button
              className="bg-green-400 text-white rounded-md px-4 py-1"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-rose-400 text-white rounded-md px-4 py-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
