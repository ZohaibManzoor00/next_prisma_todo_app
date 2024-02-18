"use server";
import {
  CreateTodoProps,
  ToggleTodoProps,
  DeleteTodoProps,
  TodoItemProps,
  DeleteResponse,
} from "../types/todoTypes";
import { dbQueryHandler } from "../todo/handlers";
import { revalidateTag, unstable_cache } from "next/cache";
import { prisma } from "@/db";

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

const createTodo = async (
  data: CreateTodoProps
): Promise<TodoItemProps | unknown> => {
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

const deleteTodo = async (
  id: string
): Promise<TodoItemProps | DeleteResponse> => {
  try {
    // await dbQueryHandler("todo", "delete", { where: { id } });
    await prisma.todo.delete({ where: { id } });
    revalidateTag("todo");
    return { msg: "Successfully Deleted Todo" };
  } catch (err: unknown) {
    console.log(err);
    return { msg: err || 'An error has occurred' };
  }
};

export { getTodos, createTodo, toggleTodo, deleteTodo };
