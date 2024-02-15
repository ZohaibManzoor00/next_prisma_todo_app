'use client'

import { TodoProps } from "../types/todoTypes";

export default function TodoItem({ id, title, completed, toggleTodoCompleted, deleteToDo }: TodoProps) {
  const handleCheckbox = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    return toggleTodoCompleted(id, e.target.checked)
  }
  
  const handleDeleteBtn = (): void => {
    return deleteToDo(id)
  }

  return (
    <li className="flex gap-1 items-center py-4">
      <input id={id} type="checkbox" className="cursor-pointer peer" 
        defaultChecked={completed}
        onChange={handleCheckbox}
      />
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
        {title}
      </label>
      <button className="font-bold hover:bg-red-400 text-red-500" onClick={handleDeleteBtn}>Delete</button>
    </li>
  );
}
