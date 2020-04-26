import React, { useState } from "react";

import { presets } from "react-motion";
import styled from "styled-components";

export default function Project({
  src,
  description,
  title,
  productionURL,
  repoURL,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProjectWrapper>
      <ProjectImage src={src} />
      <ProjectTitle>{title}</ProjectTitle>

      <ProjectDescription isOpen={isOpen}> {description}</ProjectDescription>

      <CollapseButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "less" : "more..."}
      </CollapseButton>
      <ProjectLink href={productionURL}>visit</ProjectLink>
      <ProjectLink href={repoURL}>repo</ProjectLink>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  justify-self: center;
  border: solid black 2px;
  background-color: white;
  margin: 1%;
`;

const ProjectImage = styled.img`
  width: 350px;
  src: ${(props) => props.src};
`;

const ProjectTitle = styled.div`
  width: 350px;
`;

const ProjectDescription = styled.div`
  transition: all 0.3s ease-out;
  overflow: hidden;
  padding: ${(props) => (props.isOpen ? "10px 0" : "0")};
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
  width: 350px;
`;

const ProjectLink = styled.a``;

const CollapseButton = styled.div`
  justify-self: flex-end;
`;
