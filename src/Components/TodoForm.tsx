import React, { useState, useEffect } from 'react';
import { FiPlus, FiCheck } from 'react-icons/fi';
import type { Todo } from '../Interfaces/Todo';

interface TodoFormProps {
  onAdd: (text: string) => void;
  onUpdate: (id: string, text: string) => void;
  editingTodo: Todo | null;
  setEditingTodo: (todo: Todo | null) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd, onUpdate, editingTodo, setEditingTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setText(editingTodo.text);
    } else {
      setText('');
    }
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editingTodo) {
      onUpdate(editingTodo.id, text.trim());
    } else {
      onAdd(text.trim());
    }
    setText('');
    setEditingTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ne yapmak istersin?"
        className="flex-1 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all text-lg font-medium shadow-sm"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-xl px-6 py-3 font-semibold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-indigo-500/30"
      >
        {editingTodo ? (
          <>
            <FiCheck className="text-xl" /> Güncelle
          </>
        ) : (
          <>
            <FiPlus className="text-xl" /> Ekle
          </>
        )}
      </button>
    </form>
  );
};
