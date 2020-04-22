import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { theme } from "./../../style/theme";
import { device } from "../../style/DeviceSizes";
import { Link } from "@reach/router";
export default function NavButton({ icon, text, to }) {
  return (
    <NavLink>
      <Link style={{ textDecoration: "none", color: "#4B4B4C" }} to={`${to}`}>
        <FontAwesomeIcon
          style={{
            margin: "2px",
            padding: "0px",
            width: "80%",
            height: "60%",
            color: `${theme.text}`,
            textShadow: "2px 4px 3px rgba(0, 0, 0, 0.2)",
          }}
          icon={icon}
        />
        <LinkText>{text}</LinkText>
      </Link>
    </NavLink>
  );
}

const NavLink = styled.div`
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  @media ${device.mobileL} {
    width: 25%;
  }
  :hover {
    transform: scale(1.05);
  }
  transition: all 0.2s ease-in-out;
  width: 23%;
  align-self: flex-end;
  justify-self: flex-end;
  text-align: center;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12),
    0 0px 4px rgba(0, 0, 0, 0.12), 0 0px 8px rgba(0, 0, 0, 0.12),
    0 0px 16px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  padding-top: 5px;
  padding-bottom: 5px;
  height: 75%;
  border-radius: 5px 5px 0px 0px;
  ${theme.gradientExtra}
`;

const LinkText = styled.div`
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  width: 100%;
  border-top: ridge 1px ${theme.secondaryContrast};
  border-color: ${theme.extra};
  font-family: JetBrainsMono;

  padding-bottom: 1px;

  @media ${device.mobileL} {
    display: none;
  }
`;
