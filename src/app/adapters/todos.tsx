import { prisma } from "@/db";
import { CreateTodoProps, ToggleTodoProps, DeleteTodoProps } from "../types/todoTypes";

const getTodos = async () => await prisma.todo.findMany({ orderBy: {createdAt: 'desc'}})

const createTodo = async (data: CreateTodoProps) => await prisma.todo.create({ data })

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
