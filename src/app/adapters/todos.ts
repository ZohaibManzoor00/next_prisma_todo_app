import {
  CreateTodoProps,
  ToggleTodoProps,
  DeleteTodoProps,
  TodoItemProps,
} from "../types/todoTypes";
import { dbQueryHandler } from "../todo/handlers";
import { unstable_cache } from "next/cache";

const getTodos = unstable_cache(
  async (): Promise<Array<TodoItemProps>> => {
    const todos = await dbQueryHandler("todo", "findMany", {
      orderBy: { createdAt: "desc" },
    });
    return todos;
  },
  ["todo"],
  { tags: ["todo"] }
);

const createTodo = async (data: CreateTodoProps): Promise<TodoItemProps> => {
  const newlyCreatedTodo = await dbQueryHandler("todo", "create", { data });
  return newlyCreatedTodo;
};

const toggleTodo = async ({
  id,
  completed,
}: ToggleTodoProps): Promise<TodoItemProps> => {
  const toggledTodo = await dbQueryHandler("todo", "update", {
    where: { id },
    data: { completed },
  });
  return toggledTodo;
};

const deleteTodo = async ({ id }: DeleteTodoProps): Promise<TodoItemProps> => {
  const deletedTodo = await dbQueryHandler("todo", "delete", { where: { id } });
  return deletedTodo;
};

export { getTodos, createTodo, toggleTodo, deleteTodo };
