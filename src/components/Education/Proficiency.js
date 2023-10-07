import { Container } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled, { keyframes } from "styled-components";
import { Slide } from "react-awesome-reveal";
import Coading from "../../animation/build.json";
import Lottie from "lottie-react";
import "./Degree.css";
const MaimContainer = styled(Container)`
  margin-bottom: 8%;
  display: flex;
  flex-direction: row;
  @media (max-width: 765px) {
    margin-bottom: 6%;
    flex-direction: column;
  }
`;
const StyledLottie = styled(Lottie)`
  width: 450px; // Set the desired width here
  height: 350px; // Set the desired height here
  margin-top: -5rem;
  @media (max-width: 450px) {
    width: 350px; // Set the desired width here
    height: 250px;
  }
  @media (max-width: 290px) {
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
  font-size: 40px;
  color: rgb(0, 28, 85);
  opacity: 0.9;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: bold;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const HeadingTwo = styled.h2`
  font-size: 30px;
  padding-top: 20px;
  line-height: 1.1;
  font-family: "Open Sans", sans-serif;
  color: rgb(0, 28, 85);
  opacity: 0.9;
  font-weight: 400;
`;
const StyledProgressBar = styled(ProgressBar)`
  position: relative;
  height: 21px; /* Adjust the height as needed */
  background-color: #ccc; /* Default background color for the ProgressBar */
`;

const CustomProgressBar = styled.div`
  position: absolute;
  height: 100%;
  // width: 76%; /* Represents the portion of the ProgressBar that will be styled differently */
  background-color: #7f78edd1; /* Color for the selected portion */
`;

const Proficiency = () => {
  const styleBar = {
    border: "0.5px solid #2e9d9d",
    height: "21px",
    height: "21px",
    // backgroundColor: "#ff5733",
  };

  return (
    <>
      <div>
        <Slide direction="up" duration={3000} triggerOnce={true} delay={0}>
          <MainHeader>Proficiency</MainHeader>
        </Slide>
      </div>

      <MaimContainer>
        <Div1>
          <Slide direction="left" duration={3000} triggerOnce={true} delay={0}>
            <StyledLottie animationData={Coading} loop={true} />
          </Slide>
        </Div1>
        <Div2>
          <Slide direction="right" duration={3000} triggerOnce={true} delay={0}>
            <HeadingTwo>Frontend/Design</HeadingTwo>
            <StyledProgressBar>
              <CustomProgressBar style={{ width: "85%" }} />
            </StyledProgressBar>
            <HeadingTwo>Backend</HeadingTwo>

            {/* <ProgressBar now={80} style={styleBar} /> */}
            <StyledProgressBar>
              <CustomProgressBar style={{ width: "80%" }} />
            </StyledProgressBar>

            <HeadingTwo>Programing</HeadingTwo>
            <StyledProgressBar>
              <CustomProgressBar style={{ width: "76%" }} />
            </StyledProgressBar>
          </Slide>
        </Div2>
      </MaimContainer>
    </>
  );
};
export default Proficiency;
