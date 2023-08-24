import React from "react";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { text } = todo;
  return <div>{text}</div>;
};

export default TodoItem;
