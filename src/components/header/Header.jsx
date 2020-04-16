import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
export default function Header() {
  return (
    <TopBar>
      <NavWrapper>
        <NavLeftSpoiler>
          <Circle />
        </NavLeftSpoiler>
        <Nav />
      </NavWrapper>
    </TopBar>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
  display: flex;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 100%;
  background-color: red;
  align-self: flex-end;
`;

const NavLeftSpoiler = styled.div`
  width: 15%;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  box-shadow: inset 5px 0px 0px 0px #000;
  height: 120px;
  width: 20%;
  background-color: red;
  border-radius: 50%;
  transform: translate(30%, 62.5%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
