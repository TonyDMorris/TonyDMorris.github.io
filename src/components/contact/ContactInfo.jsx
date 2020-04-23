import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function ContactInfo({ phoneNumber, linkedInAddress, email }) {
  return (
    <Contact>
      <ContactText>Contact Me</ContactText>
      <ContactInfoLine>
        <ContactSource icon={faAt} />
        <ContactInfoLineContent fontSize={2}>{email}</ContactInfoLineContent>
      </ContactInfoLine>
      <ContactInfoLine>
        <ContactSource icon={faPhone} />
        <ContactInfoLineContent fontSize={4}>
          {phoneNumber}
        </ContactInfoLineContent>
      </ContactInfoLine>
      <ContactInfoLine>
        <ContactSource icon={faLinkedin} />
        <ContactInfoLineContent fontSize={1.5}>
          {linkedInAddress}
        </ContactInfoLineContent>
      </ContactInfoLine>
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

const ContactInfoLine = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContactInfoLineContent = styled.div`
  justify-self: center;
  align-self: center;
  font-size: ${(props) => `${props.fontSize}vw`};
`;
