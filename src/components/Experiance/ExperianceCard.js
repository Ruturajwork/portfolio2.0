import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import Experiance from "../../animation/experiance.json";
import { experience } from "../../portfolio.js";
const MainDiv = styled.div`
  // margin-left: 5%;
  //  margin-right: 5%;
`;
const StyledSlide = styled(Slide)`
  /* Adjust the initial position by translating the content */
  transform: translateY(-20px);
`;
const StyledCol = styled(Col)`
  background-color: rgb(237, 249, 254);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const ImageDiv = styled.div`
  max-width: 100% !important;
  height: auto;
  // margin-left: 5%;
`;
const Heading = styled.h1`
  //  / text-transform: uppercase;
  opacity: 0.9;
  text-align: center;
  color: rgb(0, 28, 85);
  font-size: 3.8rem;
  font-weight: 550;
  font-family: "Open Sans", sans-serif;
  line-height: 1.1;
  text-align: center;
  margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 3px;
  }
  @media (max-width: 243px) {
    font-size: 1.3rem;
    margin-top: 3px;
  }
`;
const SubHeading = styled.p`
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  color: rgb(127, 141, 170);
  font-size: 20px;
  line-height: 30px;
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 1380px) {
    // font-size: 25px;
  }
  @media (max-width: 756px) {
    font-size: 16px;
    margin-right: 0;
    line-height: normal;
    text-align: center;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 550px; // Set the desired width here
  height: 450px; // Set the desired height here
  margin-top: -5rem;
  margin-left: 0.3rem;
  @media (max-width: 756px) {
    margin-top: 0rem;
    width: 550px; // Set the desired width here
    height: 450px;
  }
  @media (max-width: 504px) {
    width: 450px; // Set the desired width here
    height: 350px;
  }
  @media (max-width: 450px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
`;
const MaimContainer = styled(Container)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    flex-direction: column;
  }
  @media (max-width: 976px) {
    flex-direction: column;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //   margin-left: -5rem;
  @media (max-width: 765px) {
    margin-left: 0.1rem;
  }
`;
const Div2 = styled.div`
  width: 100%;
`;
function ExperianceCard() {
  const { title, subtitle, description } = experience;

  return (
    <MaimContainer>
      <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
        <Div1>
          {/* <ImageDiv>
                <EducationImg />
              </ImageDiv> */}
          <StyledLottie animationData={Experiance} loop={true} />
          {/* <Lottie animationData={EducationAnimation} loop={true} />; */}
        </Div1>
        <Div2>
          <Slide direction="up" duration={1000} triggerOnce={true} delay={0}>
            <Heading>{title}</Heading>
          </Slide>
          <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
            <SubHeading>{description}</SubHeading>
          </Slide>
        </Div2>
      </Slide>
    </MaimContainer>
  );
}
export default ExperianceCard;
