import Project from "./Project";
import React from "react";
import styled from "styled-components";

export default function Projects({ projects }) {
  const baseURL = "https://api.towidomo.dev";
  return (
    <ProjectsWrapper>
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            src={`${baseURL}${project.image.url}`}
            description={project.description}
            title={project.title}
            repoURL={project.repo_url}
            productionURL={project.production_url}
          />
        );
      })}
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  flex-wrap: wrap;
  border: solid 2px black;
`;
