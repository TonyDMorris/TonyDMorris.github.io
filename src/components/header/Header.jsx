import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import QuickLinks from "./QuickLinks";
import { theme } from "../../style/theme";
import { device } from "./../../style/DeviceSizes";
export default function Header() {
  return (
    <>
      <QuickLinks />
      <TopBar>
        <BuisnessLogo />
        <NavWrapper>
          <NavLeftSpoiler>
            <Circle />
          </NavLeftSpoiler>
          <Nav />
        </NavWrapper>
      </TopBar>
    </>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 110px;
  @media ${device.mobileL} {
    height: 70px;
  }

  background-color: ${theme.extra};
  display: flex;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.12),
    inset 0 2px 2px rgba(0, 0, 0, 0.12), inset 0 4px 4px rgba(0, 0, 0, 0.12),
    inset 0 8px 8px rgba(0, 0, 0, 0.12), inset 0 16px 16px rgba(0, 0, 0, 0.12);
  height: 60%;
  border-right: solid 10px ${theme.extra};

  width: 100%;
  background-color: ${theme.primary};
  align-self: flex-end;
`;

const NavLeftSpoiler = styled.div`
  width: 15%;
  height: 100%;
  background-color: ${theme.extra};
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.12),
    inset 0 2px 2px rgba(0, 0, 0, 0.12), inset 0 4px 4px rgba(0, 0, 0, 0.12),
    inset 0 8px 8px rgba(0, 0, 0, 0.12), inset 0 16px 16px rgba(0, 0, 0, 0.12);
  height: 100%;
  width: 50%;
  position: relative;
  background-color: ${theme.primary};
  border-radius: 50% 0% 0% 50%;
  transform: scale(2);

  top: 50%;
  right: -83%;
  z-index: 1;
`;

const BuisnessLogo = styled.div`
  width: 1px;
  :after {
    content: "towidomo .tech";
    height: 40px;
    padding: 5px;
    margin: auto;
    position: relative;

    border: solid 2px black;
    background-color: red;
    top: 45%;
    left: 10vw;
    z-index: 4;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
