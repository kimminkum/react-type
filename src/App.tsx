import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Template from "./components/Template";
import TodoList from "./components/TodoList";

const TxtBox = styled.div<{}>``;

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
        <Template screenWidth={windowWidth}>
          <TodoList todos={todo}></TodoList>
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
