import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { Todo } from './types';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Math.ceil(Math.random() * 600000),
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className=' mt-10 max-w-2xl px-4 mx-auto'>
      <h1 className=' font-bold text-[25px] text-gray-500 py-8 text-center' >Todo List App</h1>
      <TodoList todos={todos} onAdd={handleAddTodo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </div>
  );
};

export default App;
