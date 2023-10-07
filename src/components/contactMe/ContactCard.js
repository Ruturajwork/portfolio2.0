import React from "react";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../../assets/profilePic.png";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade, Slide } from "react-awesome-reveal";
import LandingPerson from "../../animation/landingPerson.json";
import Button from "../Button";
import Lottie from "lottie-react";
// Styled components

const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
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
  }
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  //   margin-right: 40px;
  //   font-family: "Google Sans Medium";
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  padding-left: 3rem;
  opacity: 0.8;
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
    // margin-left: 3rem;
    line-height: normal;
  }
`;
const Text = styled.p`
  color: #868e96;
  margin-left: 20px;
  font-size: 1.1rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  //   @media (max-width: 518px) {
  //     margin-top: 1rem;
  //   }
  //   @media (max-width: 450px) {
  //     margin-top: 1rem;
  //   }
  //   @media (max-width: 366px) {
  //     margin-top: 1rem;
  //   }
`;
const Text1 = styled.h3`
  color: rgb(0, 28, 85);
  margin-left: 20px;
  text-align: center !important;
  font-size: 1.2rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  //   @media (max-width: 518px) {
  //     margin-top: 1rem;
  //   }
  //   @media (max-width: 450px) {
  //     margin-top: 1rem;
  //   }
  //   @media (max-width: 366px) {
  //     margin-top: 1rem;
  //   }
`;
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
const resumeLink =
  "https://raw.githubusercontent.com/Ruturajwork/resume/main/RuturajSalunkheResume.pdf";

function ContactCard() {
  return (
    <MaimContainer>
      <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
        <Div1>
          <StyledImage src={ProfilePic} alt="saad sitting on table" />
        </Div1>
        <Div2>
          <StyledHeading>Reach Out to me!</StyledHeading>
          <StyledParagraph>
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with React, Node,React
            Native, Cloud and Opensource Development.
          </StyledParagraph>
          <Text>
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </Text>
          <Text1>Open for opportunities: NO</Text1>

          <SocialMedia />
          <StyledButton text={"See My Resume"} href={resumeLink} />
        </Div2>
      </Slide>
    </MaimContainer>
  );
}

export default ContactCard;

{
  /* <Row>
            <StyledCol md={6}>
              <StyledImage src={ProfilePic} alt="saad sitting on table" />
            </StyledCol>
            <StyledCol md={6}>
              <StyledHeading>Reach Out to me!</StyledHeading>
              <StyledParagraph>
                I am available on almost every social media. You can message me,
                I will reply within 24 hours. I can help you with React,
                Node,React Native, Cloud and Opensource Development.
              </StyledParagraph>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
              <SocialMedia />
              <StyledButton text={"See My Resume"} href="#" />
            </StyledCol>
          </Row> */
}
