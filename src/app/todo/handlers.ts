// import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { toggleTodo, deleteTodo, getTodos } from "../adapters/todos";
import { TodoItemProps } from "../types/todoTypes";
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db";

const getAllTodos = async (): Promise<TodoItemProps[]> => {
    "use server"
    return await getTodos()
};

const toggleTodoCompleted = async (id: string, completed: boolean): Promise<void> => { 
  "use server";
  await toggleTodo({ id, completed });
  revalidatePath('/todo')
};

const deleteATodo = async (id: string): Promise<void> => {  
  "use server";
  await deleteTodo({ id });
  revalidatePath("/todo");
};

const queryHandler = async <T extends keyof PrismaClient>(
  model: T,
  methodName: keyof PrismaClient[T],
  args?: string | number | object
): Promise<any> => {
  try {
    const method = prisma[model][methodName as keyof (typeof prisma)[T]];
    if (typeof method !== "function") throw new Error(`Method ${String(methodName)} does not exist on model ${String(model)}`);

    const data = await (method as Function).apply(prisma[model],args ? [args] : []);
    return data;
  } catch (err: any) {
    console.error("Error executing Prisma query:", err);
    throw new Error(`Failed to execute Prisma query: ${err.message}`);
  }
}

export { toggleTodoCompleted, deleteATodo, getAllTodos, queryHandler };

