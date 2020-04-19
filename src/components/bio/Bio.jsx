import React from "react";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import { theme } from "../../style/theme";
import { device } from "../../style/DeviceSizes";
export default function Bio({ bio, src }) {
  return (
    <Container>
      <ProfilePicture src={src} />
      {bio ? (
        bio
          .split("\n")
          .filter((para) => para !== "")
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
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const ProfilePicture = styled.div`
  background-image: url(${(props) => props.src});
  background-position: 15px;
  margin-left: 20%;
  margin-top: 5%;
  background-size: 200%;
  background-repeat: no-repeat;
  height: 30vw;
  width: 60%;
  @media ${device.mobileL} {
    width: 90%;
    margin-left: 3%;
  }
`;
