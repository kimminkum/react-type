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
  onCheckToggle: (id: number) => void;
  onInsertToggle: () => void;
  onChangeSelectedTodo: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo
}) => {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </ListContainer>
  );
};

export default TodoList;
