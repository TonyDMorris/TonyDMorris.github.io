import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
export default function QuickLinks() {
  return <LinkBar />;
}

const LinkBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${theme.secondaryContrast};
  grid-column: 2/2;
`;
