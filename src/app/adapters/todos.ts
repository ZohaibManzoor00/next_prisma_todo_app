import { prisma } from "@/db";
import {
  CreateTodoProps,
  ToggleTodoProps,
  DeleteTodoProps,
  TodoItemProps,
} from "../types/todoTypes";

const getTodos = async (): Promise<TodoItemProps[]> => {
    return await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
};

const createTodo = async (data: CreateTodoProps): Promise<TodoItemProps> => {
  return await prisma.todo.create({ data });
};

const toggleTodo = async ({ id, completed }: ToggleTodoProps): Promise<TodoItemProps> => {
  return await prisma.todo.update({ where: { id }, data: { completed } });
};

const deleteTodo = async ({ id }: DeleteTodoProps): Promise<TodoItemProps> => {
  return await prisma.todo.delete({ where: { id } });
};

export { getTodos, createTodo, toggleTodo, deleteTodo };
