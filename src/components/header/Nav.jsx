import React from "react";
import NavButton from "./NavButton";
import styled from "styled-components";
import { device } from "../../style/DeviceSizes";
import { Link } from "@reach/router";

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
      <NavButton to="/bio" text="Bio" icon={faSmile}></NavButton>
      <NavButton to="cv" text="CV" icon={faFileAlt}></NavButton>
      <NavButton to="/projects" text="Projects" icon={faCode}></NavButton>
      <NavButton to="/contact" text="Contact" icon={faAddressCard}></NavButton>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  @media ${device.mobileL} {
    width: 100%;
  }
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 2;
`;
