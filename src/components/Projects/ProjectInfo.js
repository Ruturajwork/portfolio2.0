import react from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import Project from "../../animation/project2.json";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const MaimContainer = styled(Container)`
  margin-bottom: 8%;
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    flex-direction: column;
  }
  @media (max-width: 976px) {
    flex-direction: column;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 650px; // Set the desired width here
  height: 550px; // Set the desired height here
  margin-left: 3rem;
  @media (max-width: 776px) {
    width: 500px; // Set the desired width here
    height: 400px;
    margin-left: 0.1rem;
  }
  @media (max-width: 518px) {
    width: 450px; // Set the desired width here
    height: 350px;
  }
  @media (max-width: 450px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  @media (max-width: 366px) {
    margin-top: 1rem;
    width: 250px; // Set the desired width here
    height: 150px;
  }
`;
const Div1 = styled.div`
  margin-left: -5rem;
  @media (max-width: 765px) {
    margin-left: 0.1rem;
  }
`;
const Div2 = styled.div`
  width: 100%;
`;
const MainHeader = styled.h1`
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 30px;
  color: rgb(0, 28, 85);
  opacity: 0.9;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: bold;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 1rem;
  }
  @media (max-width: 518px) {
    margin-top: 1rem;
  }
  @media (max-width: 450px) {
    margin-top: 1rem;
  }
  @media (max-width: 366px) {
    margin-top: 1rem;
  }
`;
const Heading4 = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  text-align: justify;
  line-height: 30px;
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
  color: rgb(127, 141, 170);
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 0;
    margin-left: 0;
    line-height: normal;
    text-align: center;
  }
`;
const ProjectInfo = () => {
  return (
    <>
      <MaimContainer>
        <Div1>
          <Slide direction="left" duration={3000} triggerOnce={true} delay={0}>
            <StyledLottie animationData={Project} loop={true} />
          </Slide>
        </Div1>
        <Div2>
          <Slide direction="up" duration={1000} triggerOnce={true} delay={0}>
            <MainHeader>Projects</MainHeader>
          </Slide>
          <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
            <Heading4>
              My projects makes use of vast variety of latest technology tools.
              My best experience is to create FullStack projects and Deploy them
              to web applications using cloud infrastructure..
            </Heading4>
          </Slide>
        </Div2>
      </MaimContainer>
    </>
  );
};
export default ProjectInfo;
