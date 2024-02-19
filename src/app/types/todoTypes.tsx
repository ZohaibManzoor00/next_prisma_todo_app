export type CreateTodoProps = {
  title: string;
  completed: boolean;
};

export type ToggleTodoProps = {
  id: string;
  completed: boolean;
};

export type DeleteTodoProps = {
  id: string;
};

export type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

export interface DeleteResponse {
  msg?: string;
  error?: unknown;
}

export type TodoHandlerProps = {
  toggleTodoCompleted: (id: string, completed: boolean) => void;
  deleteATodo: (id: string) => Promise<DeleteResponse>
};

export interface TodoProps extends TodoItemProps, TodoHandlerProps {}
