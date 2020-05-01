import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { device } from "../../style/DeviceSizes";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { theme } from "./../../style/theme";

export default function Project({
  src,
  description,
  title,
  productionURL,
  repoURL,
}) {
  return (
    <ProjectWrapper>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectImage src={src} />
      <ProjectDescription> {description}</ProjectDescription>
      <ProjectLinksWrapper>
        <ProjectLinkIcon fontSize="40" icon={faRocket} />
        <ProjectLink target="_none" href={productionURL}>
          Visit the project
        </ProjectLink>
        <ProjectLinkIcon fontSize="40" icon={faGithubAlt} />
        <ProjectLink target="_none" href={repoURL}>
          View the code
        </ProjectLink>
      </ProjectLinksWrapper>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
height: 400px;
  width: 350px;
  @media ${device.tablet} {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  justify-self: center;

  margin: 1%;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12),
    0 0px 4px rgba(0, 0, 0, 0.12), 0 0px 8px rgba(0, 0, 0, 0.12),
    0 0px 16px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  ${theme.gradientExtra}
  color: ${theme.text}
`;

const ProjectImage = styled.img`
  box-sizing: border-box;
  src: ${(props) => props.src};
  height: auto;
  width: 90%;
  align-self: center;
  box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.12),
    inset 0 0px 2px rgba(0, 0, 0, 0.12), inset 0 0px 4px rgba(0, 0, 0, 0.12),
    inset 0 0px 8px rgba(0, 0, 0, 0.12), inset 0 0px 16px rgba(0, 0, 0, 0.12);

  border: solid 1px #b6764b;
  :hover {
    border: solid 2px ${theme.primary};
  }
`;

const ProjectTitle = styled.div``;

const ProjectDescription = styled.div`
  padding: 5% 5% 0% 5%;
  overflow: hidden;
  overflow-y: scroll;
  flex-grow: 1;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${theme.text};
  font-family: JetBrainsMono;
  align-self: flex-end;
  font-size: 16px;
  :hover {
    color: ${theme.primary};
  }
`;

const ProjectLinksWrapper = styled.div`
  align-self: center;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: solid 1px #f5f5f5;
  box-sizing: border-box;
  padding-top: 5%;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-top: 5px;
`;

const ProjectLinkIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => `${props.fontSize}px`};
  color: ${theme.text};
  align-self: flex-end;
  :hover {
    color: ${theme.primary};
  }
`;
