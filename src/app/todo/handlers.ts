import { redirect } from "next/navigation";
import { toggleTodo, deleteTodo, getTodos } from "../adapters/todos";
import { TodoItemProps } from "../types/todoTypes";

const getAllTodos = async (): Promise<TodoItemProps[]> => {
    "use server"
    return await getTodos()
};

const toggleTodoCompleted = async (id: string, completed: boolean): Promise<void> => { 
  "use server";
  await toggleTodo({ id, completed });
  redirect('/todo')
};

const deleteATodo = async (id: string): Promise<void> => {  
  "use server";
  await deleteTodo({ id });
  redirect("/todo");
};

export { toggleTodoCompleted, deleteATodo, getAllTodos };

