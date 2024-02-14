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
  toggleTodo: (id: string, completed: boolean) => void;
  deleteToDo: (id: string) => void;
};
