import react from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import Project from "../animation/project1.json";
import ProjectInfo from "../components/Projects/ProjectInfo";
import ProjectCard from "../components/Projects/ProjectCard";
import { Zoom } from "react-awesome-reveal";
import TopButton from "../components/TopButton/TopButton";
const ProjectScreen = () => {
  return (
    <>
      <ProjectInfo />
      {/* <Zoom> */}
      <ProjectCard />
      <TopButton />
      {/* </Zoom> */}
    </>
  );
};
export default ProjectScreen;
