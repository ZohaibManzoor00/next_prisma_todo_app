import {
  CreateTodoProps,
  ToggleTodoProps,
  DeleteTodoProps,
  TodoItemProps,
} from "../types/todoTypes";
import { queryHandler } from "../todo/handlers";


const getTodos = async (): Promise<TodoItemProps[]> => {
  const todos = await queryHandler("todo", "findMany", { orderBy: { createdAt: "desc" } });
  return todos;
};

const createTodo = async (data: CreateTodoProps): Promise<TodoItemProps> => {
  const newlyCreatedTodo = await queryHandler('todo', 'create', { data })
  return newlyCreatedTodo
};

const toggleTodo = async ({
  id,
  completed,
}: ToggleTodoProps): Promise<TodoItemProps> => {
  const toggledTodo = await queryHandler('todo', 'update', { where: { id }, data: { completed } })
  return toggledTodo
};

const deleteTodo = async ({ id }: DeleteTodoProps): Promise<TodoItemProps> => {
  const deletedTodo = await queryHandler('todo', 'delete', { where: id })
  return deletedTodo
};

export { getTodos, createTodo, toggleTodo, deleteTodo };
