import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function ContactInfo({ phoneNumber, linkedInAddress, email }) {
  return (
    <Contact>
      <ContactText>Contact Me</ContactText>
      <ContactSource icon={faAt} />
      <ContactSource icon={faPhone} />
      <ContactSource icon={faLinkedin} />
    </Contact>
  );
}

const Contact = styled.div`
  width: 50%;
  border: solid 2px black;
  align-self: center;
  flex-direction: column;
  color: white;
  display: flex;
  margin-top: 5%;
  text-align: center;
`;

const ContactText = styled.div`
  align-self: center;
  font-size: 5vw;
`;
const ContactSource = styled(FontAwesomeIcon)`
  font-size: 3vw;
  margin: 5%;
`;
