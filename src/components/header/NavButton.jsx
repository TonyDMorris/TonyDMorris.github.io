import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { theme } from "./../../style/theme";
import { device } from "../../style/DeviceSizes";
export default function NavButton({ icon, text }) {
  return (
    <NavLink>
      <FontAwesomeIcon
        style={{
          width: "80%",
          height: "60%",
          color: `${theme.extra}`,
        }}
        icon={icon}
      />
      <LinkText>{text}</LinkText>
    </NavLink>
  );
}

const NavLink = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  text-align: center;
  padding-top: 5px;
  box-sizing: border-box;
  border: solid 2px black;
  height: 95%;
  width: 10vw;
  background-color: ${theme.primaryContrast};
`;

const LinkText = styled.div`
  width: 100%;
  border: solid 1px black;
  margin-top: 5px;
  font-family: JetBrainsMono;
  font-weight: 900;
  @media ${device.mobileL} {
    display: none;
  }
`;
