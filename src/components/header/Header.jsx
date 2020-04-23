import Nav from "./Nav";
import React from "react";
import { device } from "./../../style/DeviceSizes";
import styled from "styled-components";
import { theme } from "../../style/theme";
export default function Header() {
  return (
    <>
      <TopBar>
        <NavWrapper>
          <NavLeftSpoiler>
            <Circle />
          </NavLeftSpoiler>
          <Nav />
        </NavWrapper>
        <BuisnessLogo>
          TOWIDOMO <br />
          .TECH
        </BuisnessLogo>
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

  ${theme.gradientHeaderPrimary}
  display: flex;
`;

const NavWrapper = styled.div`
  ${theme.gradientHeaderSecondary}
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.12),
    inset 0 2px 2px rgba(0, 0, 0, 0.12), inset 0 4px 4px rgba(0, 0, 0, 0.12),
    inset 0 8px 8px rgba(0, 0, 0, 0.12), inset 0 16px 16px rgba(0, 0, 0, 0.12);
  height: 60%;
 margin-right:10px;
border-radius: 5px 5px 5px 5px;
  width: 80%;
  /* background-color: ${theme.primary}; */
  align-self: flex-end;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const NavLeftSpoiler = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
  ${theme.gradientHeaderPrimary}
  width: 15%;
  height: 100%;
  background-color: ${theme.extra};
  display: flex;
  flex-direction: column;
  background-size: 700%;
`;

const Circle = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
  ${theme.gradientHeaderSecondary}
  background-size: 100vw;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.12),
    inset 0 2px 2px rgba(0, 0, 0, 0.12), inset 0 4px 4px rgba(0, 0, 0, 0.12),
    inset 0 8px 8px rgba(0, 0, 0, 0.12), inset 0 16px 16px rgba(0, 0, 0, 0.12);
  height: 100%;
  width: 50%;
  position: relative;

  border-radius: 50% 0% 0% 50%;
  transform: scale(2);

  top: 50%;
  right: -83%;
  z-index: 1;
`;

const BuisnessLogo = styled.div`
  padding: 5px;
  height: 50%;
  margin-left: 5px;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 900;
  color: ${theme.secondary};
  font-family: JetBrainsMono;
  justify-self: flex-end;
  align-self: flex-end;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  border: solid 1px ${theme.secondaryContrast};
  background-color: rgba(0, 0, 0, 0.12);

  @media ${device.mobileL} {
    display: none;
  }
`;
