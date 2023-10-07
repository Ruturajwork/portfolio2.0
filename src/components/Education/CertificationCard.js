import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Img from "../../assets/certificateIcon/rstForum.png";
import { certifications } from "../../portfolio";
import "./Degree.css";
const CertCard = styled.div`
  width: 30%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #d9dbdf;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #d9dbdf;
  margin-bottom: 30px;
  // margin-left: 2rem;
  flex: 0 0 30%;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 2rem;
  }
  @media (max-width: 500px) {
    width: 80%;
    margin-left: 1rem;
  }
`;

const CertHeader = styled.div`
  margin: 0px;
  border-radius: 5px 5px 0px 0px;
`;

const LogoImg = styled.img`
  margin: 3px;
  width: auto;
  height: 100px;
`;

const CertBody = styled.div`
  margin: 0px;
`;

const CertBodyTitle = styled.h2`
  font-family: "Google Sans Regular";
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const CertBodySubtitle = styled.h3`
  font-family: "Google Sans Regular";
  font-size: 18px;
  color: #808080;
  margin: 10px;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const ContentOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
`;

const ContentDetails = styled.div`
  color: rgb(0, 28, 85);
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  // transform: translate(-50%, -50%);
  // transition: all 0.3s ease-in-out 0s;
`;

const ContentTitle = styled.h1`
  color: rgb(0, 28, 85);
  font-size: 40px !important;
  font-weight: 600 !important;
  font-family: "Google Sans Regular";
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 24px;
  /* Add transitions for smooth hover effects */
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const CertsBodyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CertificationCard = () => {
  return (
    <CertsBodyDiv>
      {certifications.certifications.map((cert, index) => (
        <CertCard key={index}>
          <div className="cert-card">
            <div className="content">
              <a
                href={cert.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="content-overlay"></div>
                <div
                  className="cert-header"
                  style={{ backgroundColor: cert.color_code }}
                >
                  <img
                    className="logo_img"
                    src={require(`../../assets/certificateIcon/${cert.logo_path}`)}
                    alt={cert.alt_name}
                  />
                </div>
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: "white" }}>
                    Certificate
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <CertBody>
            <CertBodyTitle style={{ color: "rgb(127, 141, 170)" }}>
              {cert.title}
            </CertBodyTitle>
            <CertBodySubtitle style={{ color: "rgb(127, 141, 170)" }}>
              {cert.subtitle}
            </CertBodySubtitle>
          </CertBody>
        </CertCard>
      ))}
    </CertsBodyDiv>
  );
};

export default CertificationCard;
