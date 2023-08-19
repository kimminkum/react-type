import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Header from "./routes/Header";
import Roulette from "./components/Roulette";

const TxtBox = styled.div<{}>``;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tabWidth, setTabWidth] = useState<boolean>(false);
  const [mbWidth, setMbWidth] = useState<boolean>(false);
  const [isNavToggle, setIsNavToggle] = useState(false);

  const handleToggle = () => {
    setIsNavToggle(!isNavToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(window.innerWidth);
      setTabWidth(newWindowWidth < 1200);
      setMbWidth(newWindowWidth < 360);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header
          isNavToggle={isNavToggle}
          onToggle={handleToggle}
          windowWidth={windowWidth}
        />

        <Roulette mobileWidth={mbWidth} tablitWidth={tabWidth}></Roulette>

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
