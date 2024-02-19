"use client";

import { useState } from "react";
import { TodoProps } from "../types/todoTypes";
import ErrorBoundary from "../error";
import { toast } from "react-hot-toast";

export default function TodoItem({
  id,
  title,
  completed,
  toggleTodoCompleted,
  deleteATodo,
}: TodoProps) {
  const handleCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    return toggleTodoCompleted(id, e.target.checked);
  };

  const [error, setError] = useState("");

  const handleDeleteBtn = async () => {
    const res = await deleteATodo(id);
    if (res?.error) {
      toast.error(String(res.error));
      setError(String(res.error));
      return;
    }
    toast("Keep it up!", {
      duration: 1500,
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <li className="py-2 list-none flex justify-end gap-2">
      <label
        htmlFor={id}
        className="text-center peer-checked:line-through cursor-pointer peer-checked:text-slate-500 text-lg"
      >
        {title}
      </label>
      <div className="flex gap-1">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer pee"
          defaultChecked={completed}
          onChange={handleCheckbox}
        />
        <button
          className="pr-2 font-bold hover:text-red-400 text-red-500"
          onClick={handleDeleteBtn}
        >
          Delete
        </button>

        {error && <ErrorBoundary error={error} retry={handleDeleteBtn} />}
      </div>
    </li>
  );
}
