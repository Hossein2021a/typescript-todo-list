import React, { useState } from "react";
import { Todo } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onAdd: (text: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onAdd,
  onDelete,
  onEdit,
}) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="text-center w-full flex items-center">
        <input
          className="w-full border-[1px] rounded-md border-gray-400 py-2 px-2 outline-none"
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="insert todo ..."
        />
        <button className="py-2 bg-blue-600  rounded-md text-white ml-2 px-4" onClick={handleAdd}>
          AddToDo
        </button>
      </div>

      <ul className="w-full flex flex-col items-center gap-4  mt-4">
        {todos.map((todo) => (
          <li className="w-full" key={todo.id}>
            <TodoItem todo={todo} onDelete={onDelete} onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
  );
};
