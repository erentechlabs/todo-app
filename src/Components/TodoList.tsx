import React from 'react';
import type { Todo } from '../Interfaces/Todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700">
        <p className="text-slate-500 dark:text-slate-400 flex flex-col items-center gap-3">
          <span className="text-4xl text-slate-300 dark:text-slate-600">📝</span>
          <span className="font-medium text-lg">Henüz eklenecek bir görev yok.</span>
          <span className="text-sm">Hemen yukarıdan ilk görevini ekle!</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
