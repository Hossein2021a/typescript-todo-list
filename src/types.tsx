export interface Todo {
    id: number;
    text: string;
}

export interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
  }

export interface TodoListProps {
  todos: Todo[];
  onAdd: (text: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}
  
