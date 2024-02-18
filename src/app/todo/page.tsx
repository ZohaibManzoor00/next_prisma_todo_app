import { Suspense } from "react";
import TodoItem from "../components/todoitem";
import { toggleTodoCompleted, deleteATodo } from "./handlers";
import { getAllTodos } from "./handlers";

export default async function TodoPage() {
  const todos = await getAllTodos();

  return (
    <div className="grid place-content-center">
      <Suspense fallback={<h1 className="text-lg">Loading todos ...</h1>}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteToDo={deleteATodo}
          />
        ))}
      </Suspense>
    </div>
  );
}
