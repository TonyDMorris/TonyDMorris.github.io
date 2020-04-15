import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <TopBar>
      <Nav>
        <NavLeftSpoiler>
          <Circle />
        </NavLeftSpoiler>
      </Nav>
    </TopBar>
  );
}

const TopBar = styled.div`
  width: 100%;
  height: 150px;
  background-color: blue;
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 100%;
  background-color: red;
  align-self: flex-end;
`;

const NavLeftSpoiler = styled.div`
  width: 30%;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
`;

const Circle = styled.div`
  height: 120px;
  width: 20%;
  background-color: red;
  border-radius: 50%;
  transform: translate(100%, 62.5%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
