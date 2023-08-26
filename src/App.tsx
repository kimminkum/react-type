import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

const AddTodoBtn = styled.div`
  position: fixed;
  right: 36px;
  bottom: 36px;
  z-index: 100;
  width: 80px;
  height: 80px;
  cursor: pointer;
  font-size: 5rem;
  color: #f67280;
`;

// let nextId = 4;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [insertToggle, setInsertToggle] = useState(false);
  const nextId = useRef(4);

  const onInsertToggle = () => {
    setInsertToggle(!insertToggle);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertTodo = (text: string) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    }
  };

  const onCheckToggle = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Template screenWidth={windowWidth} todoLength={todos.length}>
          <TodoList todos={todos} onCheckToggle={onCheckToggle}></TodoList>
          <AddTodoBtn onClick={onInsertToggle}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </AddTodoBtn>
          {insertToggle && (
            <TodoInsert
              onInsertToggle={onInsertToggle}
              onInsertTodo={onInsertTodo}
            />
          )}
        </Template>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* {!isNavToggle && (
          <Routes>
            <Route
              path="/"
              element={<Main windowWidth={windowWidth} />}
            ></Route>
            <Route
              path="/about/*"
              element={<About windowWidth={windowWidth} />}
            ></Route>
          </Routes>
        )} */
}

{
  /* {isNavToggle && (
          <Nav isNavToggle={isNavToggle} onToggle={handleToggle}></Nav>
        )}
        <Footer onToggle={handleToggle} windowWidth={windowWidth} /> */
}
