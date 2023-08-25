import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import TodoItem from "./TodoItem";

const ListContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding-bottom: 30px;
`;

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
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;
