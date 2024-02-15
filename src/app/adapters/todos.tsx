import { prisma } from "@/db";
import { CreateTodoProps, ToggleTodoProps, DeleteTodoProps, TodoItemProps } from "../types/todoTypes";

const getTodos = async (): Promise<TodoItemProps[]> => await prisma.todo.findMany({ orderBy: {createdAt: 'desc'}})

const createTodo = async (data: CreateTodoProps): Promise<TodoItemProps> => await prisma.todo.create({ data })

const toggleTodo = async (data: ToggleTodoProps) => {
    const { id, completed } = data 
    await prisma.todo.update({ where: { id }, data: { completed }})
}

const deleteTodo = async ({ id }: DeleteTodoProps) => await prisma.todo.delete({ where: { id } })

export {
    getTodos, 
    createTodo,
    toggleTodo, 
    deleteTodo
}
