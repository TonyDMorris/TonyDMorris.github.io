import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import QuickLinks from "./QuickLinks";
import { theme } from "../../style/theme";
export default function Header() {
  return (
    <>
      <QuickLinks />
      <TopBar>
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
  grid-column: 2 / 2;
  width: 100%;
  height: 100px;
  background-color: ${theme.primary};
  display: flex;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  background-color: ${theme.secondary};
  align-self: flex-end;
`;

const NavLeftSpoiler = styled.div`
  width: 15%;
  height: 100%;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  box-shadow: inset 1px 1px 0px 0px #000;
  height: 100%;
  width: 50%;
  position: relative;
  background-color: ${theme.secondary};
  border-radius: 50% 0% 0% 50%;
  transform: scale(2);

  top: 49%;
  right: -83%;
  z-index: 1;
`;
