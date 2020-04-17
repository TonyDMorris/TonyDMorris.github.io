import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import { device } from "./style/DeviceSizes";
import { theme } from "./style/theme";
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
  @media ${device.laptop} {
    grid-column: 1/1;
  }
`;
const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  border: solid 10px ${theme.extra};
  z-index: 3;
  height: 100px;
  background-color: ${theme.primary};
`;

const Body = styled.div`
  width: 100vw;
  display: grid;
  background-color: ${theme.secondaryContrast};
  grid-template-columns: 1fr 6fr 1fr;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

export default App;
