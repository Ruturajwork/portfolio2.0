import React from "react";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import FeelingProud from "../assets/feelingProud.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "./socialMedia/SocialMedia";
import Lottie from "lottie-react";
import { Fade, Slide } from "react-awesome-reveal";
import Button from "./Button";
import { seo } from "../portfolio";
import Round from "../assets/round-shape.png";
import CardComponent from "./SkillCard/Card";
import CoadingPerson from "../animation/coadingPerson.json";
// Styled components
const StyledContainer = styled.div`
  background-color: rgb(237, 249, 254);
`;

const StyledCol = styled(Col)`
  background-color: rgb(237, 249, 254);
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const StyledRow = styled(Row)`
  @media (max-width: 994px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  color: rgb(0, 28, 85);
  font-family: "Google Sans Bold";
  margin-top: 20px;
  text-align: left;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  margin-right: 40px;
  font-family: "Google Sans Medium";
  font-weight: bold;
  padding-left: 1rem;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: normal;
    text-align: center;
    margin-right: 15px;
  }
`;

const StyledImage = styled(Image)`
  padding-left: 3rem;
  margin-top: 20px;
  max-width: 80%;
  height: auto;
  @media (max-width: 768px) {
    margin-left: 3rem;
    line-height: normal;
  }
`;
const BackgroundImage = styled.div`
  background-image: url(${Round});
  background-size: cover; /* Adjust this property as needed */
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20px; /* Adjust padding as needed */
`;
const ParagraphContainer = styled.div`
  animation: rotate-animation 10s infinite linear;
  background-image: url(${Round});
  background-size: cover; /* Adjust this property as needed */
  background-repeat: no-repeat;
  background-position: center center;
  padding: 20px; /* Adjust padding as needed */
`;

const StyledH1 = styled.h1`
  color: rgb(0, 28, 85);
  padding-top: 30px;
  font-size: 4rem;
  text-align: center;

  @media (max-width: 1380px) {
    font-size: 4rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;
const ImageContainer = styled.div`
  border: 0.5px solid rgb(177 239 242 / 50%);
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
  box-shadow: 0 5px 30px 0 rgba(134, 195, 255, 0.57);
  background-color: #86fde8;
  background: url("../assets/icons/html1.png") no-repeat;

  // transition: background 0.25s ease-in-out; // Add a transition for smooth hover effect

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //     background-color: blue;
    background: url("../assets/icons/html.png") no-repeat;
    transition: background 0.25s ease-in-out; // Add a transition for smooth hover effec
  }
`;

const Paragraph = styled.p`
  color: rgb(127, 141, 170);
  font-size: 20px;
  background-color: transparent;
  font-family: Google Sans Regular;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const BackgroundImageContainer = styled.div`
  background-image: url(${Round});
  background-size: cover; /* Adjust this property as needed */
  background-size: 240px 240px;
  background-repeat: no-repeat;
  background-position: right 17rem;
  padding: 20px; /* Adjust padding as needed */
  @media (max-width: 470px) {
    background-image: none;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 700px; // Set the desired width here
  height: 600px; // Set the desired height here
  margin-top: 2rem;
  @media (max-width: 1000px) {
    width: 550px; // Set the desired width here
    height: 450px;
    margin-top: 0rem;
  }
  @media (max-width: 623px) {
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
function Skills() {
  const imageStyle = {
    border: "2px solid #000", // Specify border properties here
    borderRadius: "5px", // Optional: Add border radius for rounded corners
    padding: "10px", // Optional: Add padding for spacing
  };

  return (
    <Container fluid style={{ backgroundColor: "rgb(237, 249, 254)" }}>
      <StyledContainer>
        <Fade direction="up">
          <StyledH1>What I Do ?</StyledH1>
        </Fade>
        <StyledRow>
          <StyledCol md={6}>
            <Slide direction="left" triggerOnce delay={0}>
              {/* <StyledImage src={FeelingProud} alt="saad sitting on table" /> */}
              <StyledLottie animationData={CoadingPerson} loop={true} />
            </Slide>
          </StyledCol>

          <StyledCol md={6}>
            <Slide direction="right" triggerOnce>
              <StyledHeading>Full Stack Development</StyledHeading>
            </Slide>
            {/* <ParagraphContainer> */}
            <BackgroundImageContainer>
              <Slide direction="right" triggerOnce>
                <StyledParagraph>
                  CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH
                  STACK
                </StyledParagraph>
                {/* <SocialMedia /> */}
                <CardComponent />
              </Slide>

              {/* <BackgroundImage ><Image src={Round} /></BackgroundImage> */}

              <Slide direction="right" triggerOnce>
                <Paragraph>
                  ⚡ Building responsive website front end using React-Redux
                </Paragraph>
                <Paragraph>
                  ⚡ Developing mobile applications using React Native
                </Paragraph>
                <Paragraph>
                  ⚡ Creating application backend in Node, Express & PHP
                </Paragraph>
                <Paragraph>
                  ⚡ Developing Desktop applications using Electron
                </Paragraph>
              </Slide>
            </BackgroundImageContainer>
            {/* </ParagraphContainer> */}
            {/* <ImageContainer>
              <Image
                src={Arrow}
                alt="Your Image"
                style={{ width: "50px" }}
                fluid
              />
            </ImageContainer> */}

            {/* <Image src={Arrow} style={{ width: "50px" }} /> */}
            {/* <Row style={{ paddingLeft: "3rem" }}>
              <Col>
                <Button text={"See My Resume"} href={`${seo.resume}`} />
              </Col>
              <Col>
                <Button text={"Contact Me"} href={`${seo.contactMe}`} />
              </Col>
            </Row> */}
          </StyledCol>
        </StyledRow>
      </StyledContainer>
    </Container>
  );
}

export default Skills;
