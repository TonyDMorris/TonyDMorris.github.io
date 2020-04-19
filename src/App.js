import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import { device } from "./style/DeviceSizes";
import { theme } from "./style/theme";
import { Router, Link } from "@reach/router";
import Bio from "./components/bio/Bio";
import "./index.css";
import Axios from "axios";
function App() {
  const [content, setContent] = useState(undefined);
  useEffect(() => {
    const getData = () => {
      return Axios.get("http://64.227.37.198/portfolis/1").then(({ data }) => {
        return data;
      });
    };
    getData().then(setContent);
  }, []);

  return (
    <div style={{ width: "100vw" }} className="App">
      <Body>
        <Wrapper>
          <Header />
          <Content>
            <Router>
              <Bio
                src={
                  content && `http://64.227.37.198${content.bio.Images[0].url}`
                }
                bio={content && content.bio.body}
                path="/bio"
              />
            </Router>
          </Content>
        </Wrapper>
      </Body>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  grid-column: 2/2;
  @media ${device.mobileL} {
    grid-column: 1/1;
  }
  ${theme.gradientHeaderPrimary};
`;
const Content = styled.div`
  width: 100%;

  position: relative;

  z-index: 3;
  ${theme.gradientHeaderPrimary};
`;

const Body = styled.div`
  width: 100vw;
  display: grid;
  background-color: ${theme.secondaryContrast};
  grid-template-columns: 1fr 8fr 1fr;
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export default App;
