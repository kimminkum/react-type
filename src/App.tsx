import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import Template from "./components/Template";
import TodoList from "./components/TodoList";

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

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavToggle, setIsNavToggle] = useState(false);
  const [todo, setTodo] = useState([
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

  const handleToggle = () => {
    setIsNavToggle(!isNavToggle);
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
        <Template screenWidth={windowWidth} todoLength={todo.length}>
          <TodoList todos={todo}></TodoList>
          <AddTodoBtn>
            <FontAwesomeIcon icon={faCirclePlus} />
          </AddTodoBtn>
        </Template>
        {/* {!isNavToggle && (
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
        )} */}

        {/* {isNavToggle && (
          <Nav isNavToggle={isNavToggle} onToggle={handleToggle}></Nav>
        )}
        <Footer onToggle={handleToggle} windowWidth={windowWidth} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
