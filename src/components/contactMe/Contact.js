import react from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import Address from "../../animation/address.json";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import Button from "../Button";
import MapComponent from "./MapComponent";
import ContactForm from "./ContactForm";
import Build from "../../animation/contact1.json";
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
const StyledLottie = styled(Lottie)`
  width: 550px; // Set the desired width here
  height: 450px; // Set the desired height here
  margin-left: 3rem;
  @media (max-width: 776px) {
    width: 400px; // Set the desired width here
    height: 300px;
    margin-left: 1.1rem;
  }
  @media (max-width: 518px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  @media (max-width: 450px) {
    width: 280px; // Set the desired width here
    height: 180px;
  }
  @media (max-width: 366px) {
    // margin-top: 1rem;
    width: 250px; // Set the desired width here
    height: 150px;
  }
  @media (max-width: 265px) {
    margin-top: 1rem;
    width: 150px; // Set the desired width here
    height: 100px;
  }
`;
const Div1 = styled.div`
  margin-left: -5rem;
  @media (max-width: 765px) {
    margin-left: 0.1rem;
  }
`;
const Div2 = styled.div`
  margin-top: 5rem;
  width: 100%;
  @media (max-width: 977px) {
    margin-top: 0.1rem;
  }
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
  text-align: center;
  color: rgb(127, 141, 170);
  font-size: 23px;
  line-height: 30px;
  margin-top: 0;
  margin-left: 20px;
  margin-right: 20px;
  // font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
    line-height: normal;
    text-align: center;
  }
`;
const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Contact = () => {
  const latitude = 19.033791,
    longitude = 72.86551,
    zoom = 13;
  return (
    <>
      <MaimContainer>
        <Div1>
          <Slide direction="left" triggerOnce delay={0}>
            <StyledLottie animationData={Build} loop={true} />
          </Slide>
        </Div1>
        <Div2>
          <Slide direction="right" duration={1000} triggerOnce={true} delay={0}>
            <ContactForm />
          </Slide>
        </Div2>
      </MaimContainer>
    </>
  );
};
export default Contact;
