import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../Interfaces/Todo';
import { TodoForm } from '../Components/TodoForm';
import { TodoList } from '../Components/TodoList';
import { FiCheckSquare } from 'react-icons/fi';

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load initial state from local storage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  // Save to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editingTodo && editingTodo.id === id) {
      setEditingTodo(null);
    }
  };

  const handleEditTodoClick = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
    setEditingTodo(null);
  };

  const activeTodosCount = todos.filter(t => !t.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-500/10 rounded-3xl mb-4 text-indigo-600 dark:text-indigo-400">
            <FiCheckSquare className="text-5xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">Görev Yöneticisi</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            Modern bir web geliştirme projesi - React & Tailwind
          </p>
        </header>

        <main className="bg-white dark:bg-slate-800/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 rounded-3xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50">
          
          <TodoForm
            onAdd={handleAddTodo}
            onUpdate={handleUpdateTodo}
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
          />

          <div className="mb-6 flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-700/50 pb-4">
            <h2 className="text-2xl font-bold">Görevlerin</h2>
            <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full text-sm font-semibold">
              {activeTodosCount} aktif görev
            </span>
          </div>

          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodoClick}
          />

        </main>
        
        <footer className="mt-12 text-center text-slate-400 dark:text-slate-500 text-sm">
          <p>Made with ❤️ using React JS</p>
        </footer>
      </div>
    </div>
  );
};
