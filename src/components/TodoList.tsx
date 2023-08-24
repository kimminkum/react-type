import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
