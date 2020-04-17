import React from "react";
import NavButton from "./NavButton";
import styled from "styled-components";
import {
  faAddressCard,
  faBriefcase,
  faFileAlt,
  faCode,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  return (
    <NavContainer>
      <NavButton text="Bio" icon={faSmile}></NavButton>
      <NavButton text="CV" icon={faFileAlt}></NavButton>
      <NavButton text="Projects" icon={faCode}></NavButton>
      <NavButton text="Contact" icon={faAddressCard}></NavButton>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  box-shadow: inset 0px 2px 0px 0px #000;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 2;
`;
