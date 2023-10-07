import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import EducationAnimation from "../../animation/coading.json";
import EducationAnimation1 from "../../animation/Education.json";

const MainDiv = styled.div`
  // margin-left: 5%;
  // margin-right: 5%;
`;
const StyledSlide = styled(Slide)`
  /* Adjust the initial position by translating the content */
  transform: translateY(-20px);
`;
const StyledCol = styled(Col)`
  background-color: rgb(237, 249, 254);
  padding: 20px;

  @media (max-width: 768px) {
    //  padding: 20px;
  }
`;
const StyledRow = styled(Row)`
  @media (max-width: 995px) {
    flex-direction: column;
  }
`;
const ImageDiv = styled.div`
  max-width: 100% !important;
  height: auto;
  // margin-left: 5%;
`;
const Heading = styled.h1`
  opacity: 0.9;
  text-align: center;
  color: rgb(0, 28, 85);
  font-size: 4.5rem;
  font-weight: 550;
  font-family: Google Sans Medium;
  line-height: 1.1;
  text-align: center;
  margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: -23px;
  }
  @media (max-width: 243px) {
    font-size: 1.3rem;
    margin-top: -23px;
  }
  @media (max-width: 994px) {
    text-align: center;
    margin-top: -23px;
  }
`;
const SubHeading = styled.h3`
  font-size: 35px;
  font-family: Google Sans SemiBold 600;
  color: rgb(0, 28, 85);
  text-align: center;
  @media (max-width: 1380px) {
    font-size: 25px;
  }
  @media (max-width: 756px) {
    font-size: 20px;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 650px; // Set the desired width here
  height: 550px; // Set the desired height here
  margin-top: -5rem;
  @media (max-width: 756px) {
    margin-top: 0rem;
    margin-left: -3rem;
    width: 550px; // Set the desired width here
    height: 450px;
  }
  @media (max-width: 450px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  @media (max-width: 552px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
`;
function Education() {
  return (
    <Container fluid>
      <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
        <MainDiv>
          <StyledRow>
            <StyledCol md={6}>
              {/* <ImageDiv>
                <EducationImg />
              </ImageDiv> */}
              <StyledLottie animationData={EducationAnimation1} loop={true} />
              {/* <Lottie animationData={EducationAnimation} loop={true} />; */}
            </StyledCol>

            <StyledCol md={6}>
              <Slide
                direction="up"
                duration={1000}
                triggerOnce={true}
                delay={0}
              >
                <Heading>Education</Heading>
              </Slide>
              <Slide
                direction="up"
                duration={2000}
                triggerOnce={true}
                delay={0}
              >
                <SubHeading>Qualification and Certifcations</SubHeading>
              </Slide>
            </StyledCol>
          </StyledRow>
        </MainDiv>
      </Slide>
    </Container>
  );
}
export default Education;
