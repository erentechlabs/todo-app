import React from 'react';
import { FiTrash2, FiEdit2, FiCheck } from 'react-icons/fi';
import type { Todo } from '../Interfaces/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`group flex items-center justify-between p-4 mb-3 rounded-2xl border-2 transition-all duration-300 ${todo.completed ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5'}`}>
      <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => onToggle(todo.id)}>
        <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 transition-colors ${todo.completed ? 'bg-indigo-500 border-indigo-500' : 'border-slate-300 dark:border-slate-600 group-hover:border-indigo-400'}`}>
          {todo.completed && <FiCheck className="text-white text-sm" />}
        </div>
        <span className={`text-lg font-medium transition-all ${todo.completed ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
          {todo.text}
        </span>
      </div>
      
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(todo)}
          className="p-2 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
          title="Düzenle"
        >
          <FiEdit2 />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
          title="Sil"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};
