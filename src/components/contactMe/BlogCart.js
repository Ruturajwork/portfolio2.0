import React from "react";
import styled from "styled-components";
import { Container, Image, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../../assets/profilePic.png";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade, Slide } from "react-awesome-reveal";
import BlogPost from "../../animation/Blog1.json";
import Button from "../Button";
import Lottie from "lottie-react";
// Styled components

const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 4rem;
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
  font-size: 30px;
  line-height: 40px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  padding-left: 0.3rem;
  text-align: center;
  opacity: 0.8;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: normal;
  }
`;

const MaimContainer = styled(Container)`
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
  margin-left: 10rem;
  @media (max-width: 968px) {
    margin-left: 0.1rem;
  }
`;
const Div2 = styled.div`
  width: 100%;
`;
const StyledLottie = styled(Lottie)`
  width: 550px; // Set the desired width here
  height: 450px; // Set the desired height here
  //   margin-left: 5rem;
  @media (max-width: 776px) {
    width: 400px; // Set the desired width here
    height: 300px;
    margin-left: 0.1rem;
  }
  @media (max-width: 518px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  //   @media (max-width: 450px) {
  //     width: 350px; // Set the desired width here
  //     height: 250px;
  //   }
  @media (max-width: 377px) {
    margin-top: 1rem;
    width: 250px; // Set the desired width here
    height: 150px;
  }
`;
function BlogCart() {
  return (
    <MaimContainer>
      <Slide direction="up" duration={3000} triggerOnce={true} delay={0}>
        <Div1>
          <Div2>
            <StyledHeading>Blogs</StyledHeading>
            <StyledParagraph>Coming Sooon !</StyledParagraph>
            <StyledButton text={"Visit My BlogSite"} disabled={true} />
          </Div2>
        </Div1>
        <StyledLottie animationData={BlogPost} loop={true} />
      </Slide>
    </MaimContainer>
  );
}

export default BlogCart;
