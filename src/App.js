import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import { device } from "./style/DeviceSizes";
import "./index.css";
function App() {
  return (
    <div style={{ width: "100vw" }} className="App">
      <Body>
        <Wrapper>
          <Header />
          <Content />
        </Wrapper>
      </Body>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  grid-column: 2/2;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: solid 1px black;
  z-index: 3;
`;

const Body = styled.div`
  width: 100vw;
  display: grid;
`;

export default App;
