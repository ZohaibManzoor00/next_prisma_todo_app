import { deleteTodo, getTodos } from "../adapters/todos";
import TodoItem from "../components/todoitem";
import { toggleTodo } from "../adapters/todos";
import { redirect } from "next/navigation";

export default async function TodoPage() {
  const todos = await getTodos();
  const toggleTodoCompleted = async (id: string, completed: boolean) => {
    "use server";
    toggleTodo({ id, completed });
  };

  const deleteATodo = async (id: string) => {
    "use server";
    deleteTodo({ id });
    redirect("/todo");
  };

  return (
    <header>
      <div className="grid place-content-center">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodoCompleted} deleteToDo={deleteATodo}/>
        ))}
      </div>
    </header>
  );
}
