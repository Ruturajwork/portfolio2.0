import React from "react";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import FeelingProud from "../assets/feelingProud.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "./socialMedia/SocialMedia";
import { Fade, Slide } from "react-awesome-reveal";
import LandingPerson from "../animation/landingPerson.json";
import Button from "./Button";
import { seo } from "../portfolio";
import Lottie from "lottie-react";
// Styled components
const StyledContainer = styled.div``;
const StyledLottie = styled(Lottie)`
  width: 650px; // Set the desired width here
  height: 550px; // Set the desired height here
  // margin-top: 5rem;
  @media (max-width: 1322px) {
    width: 600px;
    height: 500px;
  }
  @media (max-width: 1236px) {
    width: 550px;
    height: 450px;
  }
  @media (max-width: 1137px) {
    width: 500px;
    height: 400px;
  }
  @media (max-width: 1033px) {
    width: 450px;
    height: 350px;
  }
  @media (max-width: 933px) {
    width: 400px;
    height: 300px;
  }
  @media (max-width: 836px) {
    width: 370px;
    height: 270px;
  }
  @media (max-width: 767px) {
    width: 500px; // Set the desired width here
    height: 400px;
  }
  @media (max-width: 494px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  @media (max-width: 370px) {
    width: 250px; // Set the desired width here
    height: 150px;
  }
`;
const StyledCol = styled(Col)`
  background-color: rgb(237, 249, 254);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  color: rgb(0, 28, 85);
  font-family: "Google Sans Bold";
  margin-top: 80px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 8px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  margin-right: 40px;
  font-family: "Google Sans Medium";
  font-weight: bold;
  padding-left: 3rem;
  opacity: 0.8;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: normal;
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  max-width: 80%;
  height: auto;
  @media (max-width: 768px) {
    margin-left: 3rem;
    line-height: normal;
  }
`;
const RowStyle = styled(Row)`
  padding-left: 3rem;
  @media (max-width: 410px) {
    padding-left: 0.1rem;
  }
`;
const StyledSlide = styled(Slide)`
  /* Adjust the initial position by translating the content */
  transform: translateY(-20px);
`;
function MyDetails() {
  return (
    <Container fluid>
      <StyledSlide direction="up" duration={2000} triggerOnce={true} delay={0}>
        <StyledContainer>
          <Row>
            <StyledCol md={6}>
              <StyledHeading>Ruturaj Salunkhe</StyledHeading>
              <StyledParagraph>
                A passionate Full Stack Software Developer 🚀 having an
                experience of building Web and Mobile applications with
                JavaScript / Reactjs / Nodejs / React Native and some other cool
                libraries and frameworks.
              </StyledParagraph>
              <SocialMedia />
              <RowStyle>
                <Col>
                  <Button text={"See My Resume"} href={`${seo.resume}`} />
                </Col>
                <Col>
                  <Button text={"Contact Me"} href={`${seo.contactMe}`} />
                </Col>
              </RowStyle>
            </StyledCol>

            <StyledCol md={6}>
              {/* <StyledImage src={FeelingProud} alt="saad sitting on table" /> */}
              <StyledLottie animationData={LandingPerson} loop={true} />
            </StyledCol>
          </Row>
        </StyledContainer>
      </StyledSlide>
    </Container>
  );
}

export default MyDetails;
