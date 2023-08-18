import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

import Header from "./routes/Header";

const Roulette = styled.div<{ fullwidth: boolean }>`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.fullwidth ? "40px 24px" : "80px 0")};
  background-color: rgba(0, 0, 0, 0.222);
`;

const PcInnerBox = styled.div<{ fullwidth: boolean }>`
  width: ${(props) => (props.fullwidth ? "100%" : "1200px")};
  margin: 0 auto;
  position: relative;
  text-align: center;
`;

const TxtBox = styled.div<{}>``;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [actWidth, setActWidth] = useState<boolean>(false);
  const [isNavToggle, setIsNavToggle] = useState(false);

  const handleToggle = () => {
    setIsNavToggle(!isNavToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(window.innerWidth);
      setActWidth(newWindowWidth < 720);
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

        <Roulette fullwidth={actWidth}>
          <PcInnerBox fullwidth={actWidth}>
            <div></div>
          </PcInnerBox>
        </Roulette>

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
