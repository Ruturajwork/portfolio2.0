import SplashAnnimation from "../animation/SplashAnnimation.json";
import Lottie from "lottie-react";
import styled from "styled-components";
import SplashName from "./Splash/SplashName";

const StyledLottieContainer = styled.div`
  height: 100vh; /* Set the background color height to cover the full viewport */
  background-color: rgb(
    237,
    249,
    254
  ); /* Set your desired background color here */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLottie = styled(Lottie)`
  // width: 650px; // Set the desired width here
  height: 600px; // Set the desired height here for the animation container
`;

const SplashScreen = () => {
  return (
    <StyledLottieContainer>
      <StyledLottie animationData={SplashAnnimation} loop={true} />
      <SplashName />
    </StyledLottieContainer>
  );
};

export default SplashScreen;
