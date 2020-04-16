import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import "./index.css";
function App() {
  return (
    <div style={{ width: "100vw" }} className="App">
      <Header />
      <Body />
    </div>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px black;
  z-index: 5;
`;

export default App;
