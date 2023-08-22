import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import styled from "styled-components";

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
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
