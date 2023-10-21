import SplashAnnimation from "../animation/SplashAnnimation.json";
import Lottie from "lottie-react";
import styled from "styled-components";

const StyledLottie = styled(Lottie)`
  // width: 650px; // Set the desired width here
  height: 650px; // Set the desired height here
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(237, 249, 254);
  // margin-top: 5rem;
  //   @media (max-width: 1322px) {
  //     width: 600px;
  //     height: 500px;
  //   }
  //   @media (max-width: 1236px) {
  //     width: 550px;
  //     height: 450px;
  //   }
  //   @media (max-width: 1137px) {
  //     width: 500px;
  //     height: 400px;
  //   }
  //   @media (max-width: 1033px) {
  //     width: 450px;
  //     height: 350px;
  //   }
  //   @media (max-width: 933px) {
  //     width: 400px;
  //     height: 300px;
  //   }
  //   @media (max-width: 836px) {
  //     width: 370px;
  //     height: 270px;
  //   }
  //   @media (max-width: 767px) {
  //     width: 500px; // Set the desired width here
  //     height: 400px;
  //   }
  //   @media (max-width: 494px) {
  //     width: 350px; // Set the desired width here
  //     height: 250px;
  //   }
  //   @media (max-width: 370px) {
  //     width: 250px; // Set the desired width here
  //     height: 150px;
  //   }
`;
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <StyledLottie animationData={SplashAnnimation} loop={true} />
    </div>
  );
};

export default SplashScreen;
