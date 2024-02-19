import { Suspense } from "react";
import TodoItem from "../components/todoitem";
import { getAllTodos, toggleTodoCompleted } from "./handlers";
import { deleteTodo } from "../adapters/todos";

export default async function TodoPage() {
  const todos = await getAllTodos();

  return (
    <div className={`grid place-content-center ${todos.length > 2 && "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteATodo={deleteTodo}
          />
        ))}
    </div>
  );
}
