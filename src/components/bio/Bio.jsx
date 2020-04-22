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
  align-self: center;
  padding: 10px;
  width: 50%;
  @media ${device.mobileL} {
    width: 90%;
  }

  text-shadow: 2px 4px 3px rgba(255, 255, 255, 0.2);
  margin-top: 5%;
  color: ${theme.primaryContrast};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;

const ProfilePicture = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  align-self: center;
  margin-top: 5%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 20vw;
  width: 40%;
  @media ${device.mobileL} {
    width: 90%;
    margin-left: 3%;
  }
`;
