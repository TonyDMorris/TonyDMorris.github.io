import {
  faAddressCard,
  faCode,
  faFileAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import React from "react";
import { device } from "../../style/DeviceSizes";
import styled from "styled-components";

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
