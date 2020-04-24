import "./index.css";

import React, { useEffect, useState } from "react";

import Axios from "axios";
import Bio from "./components/bio/Bio";
import ContactInfo from "./components/contact/ContactInfo";
import Cv from "./components/cv/Cv";
import Header from "./components/header/Header";
import { Router } from "@reach/router";
import { device } from "./style/DeviceSizes";
import styled from "styled-components";
import { theme } from "./style/theme";

function App() {
  const [content, setContent] = useState(undefined);
  const baseURL = "https://api.towidomo.dev";

  useEffect(() => {
    const getData = () => {
      return Axios.get(`${baseURL}/portfolis/1`).then(({ data }) => {
        return data;
        console.log(data);
      });
    };
    getData().then(setContent);
  }, []);

  return (
    <div style={{ width: "100vw" }} className="App">
      <Body>
        <Wrapper>
          <Header />
          <ContentRouter primary={false}>
            <Bio
              default
              src={content && `${baseURL}${content.bio.Images[0].url}`}
              bio={content && content.bio.body}
              path="/bio"
            />

            <Cv path="/cv" file={content && `${baseURL}${content.cv.cv.url}`} />

            <ContactInfo
              path="/contact"
              phoneNumber={content && content.contact_info.phone_number}
              linkedInAddress={content && content.contact_info.linkedin}
              email={content && content.contact_info.email}
            />
          </ContentRouter>
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
const ContentRouter = styled(Router)`
  width: 100%;

  grid-column: 2/2;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
