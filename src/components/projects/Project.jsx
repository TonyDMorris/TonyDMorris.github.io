import React from "react";
import styled from "styled-components";

export default function Project({
  src,
  description,
  title,
  productionURL,
  repoURL,
}) {
  return (
    <ProjectWrapper>
      <ProjectImage src={src} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription> {description}</ProjectDescription>
      <ProjectLink href={productionURL}>visit</ProjectLink>
      <ProjectLink href={repoURL}>repo</ProjectLink>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
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
  width: 350px;
`;

const ProjectLink = styled.a``;
