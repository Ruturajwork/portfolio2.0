import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal"; // Make sure to import any necessary dependencies
import CertificationCard from "./CertificationCard";

const CertsHeader = styled.h1`
  color: rgb(0, 28, 85);
  font-size: 40px;
  line-height: 1.1;
  // font-family: "Google Sans Regular";
  text-align: center;
  font-weight: bold;
  @media (max-width: 1380px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;

const HeadDiv = styled.div`
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Certifications = () => {
  return (
    <div className="main" id="certs">
      <HeadDiv style={{ marginTop: "3rem" }}>
        <Fade direction="up" duration={800}>
          <CertsHeader>Certifications</CertsHeader>
        </Fade>
      </HeadDiv>
      <Slide direction="up" duration={2000} triggerOnce={true} delay={0}>
        {/* <CertsBodyDiv> */}
        <CertificationCard />
        {/* </CertsBodyDiv> */}
      </Slide>
    </div>
  );
};

export default Certifications;
