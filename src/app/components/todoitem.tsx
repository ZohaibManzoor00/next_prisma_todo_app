'use client'

import { TodoProps } from "../types/todoTypes";

export default function TodoItem({ id, title, completed, toggleTodo, deleteToDo }: TodoProps) {
  return (
    <li className="flex gap-1 items-center py-4">
      <input id={id} type="checkbox" className="cursor-pointer peer" 
        defaultChecked={completed}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
        {title}
      </label>
      <button className="font-bold hover:bg-slate-700" onClick={() => deleteToDo(id)}>Delete</button>
    </li>
  );
}
