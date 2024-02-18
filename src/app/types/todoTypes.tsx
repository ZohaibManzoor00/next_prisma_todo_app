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
};

export interface DeleteResponse {
  deletedTodo?: TodoItemProps;
  msg: string | unknown;
}

export type TodoHandlerProps = {
  toggleTodoCompleted: (id: string, completed: boolean) => void;
  deleteATodo: (id: string) => Promise<TodoItemProps | DeleteResponse>
};

export interface TodoProps extends TodoItemProps, TodoHandlerProps {}
