import React from "react";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import { theme } from "../../style/theme";
import { device } from "../../style/DeviceSizes";
export default function Bio({ bio, src }) {
  return (
    <>
      <img src={src} />
      {bio ? (
        bio
          .split("\n")
          .filter((para) => para != "")
          .map((para, i) => {
            return (
              <Paragraph key={i}>
                <ReactMarkDown source={para} />
              </Paragraph>
            );
          })
      ) : (
        <></>
      )}
    </>
  );
}

const Paragraph = styled.div`
  padding: 10px;

  margin-top: 5%;
  margin-left: 20%;
  margin-right: 20%;
  @media ${device.mobileL} {
    margin: 5%;
  }
  color: ${theme.primary};
  font-family: JetBrainsMono;
  border-radius: 5px 5px 5px 5px;
  ${theme.gradientExtra}
`;
