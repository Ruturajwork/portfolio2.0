import React, { Component } from "react";
import Image1 from "../../assets/Company/AUDIX_LOGO.svg";
import styled from "styled-components";
import Image2 from "../../assets/Company/AudixColorLogo.png";
import EducationAnimation1 from "../../animation/Education.json";
import { experience } from "../../portfolio.js";
// src={require(`../../assets/Company/${cert.logo_path}`)}
const Div = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    flex-direction: column;
    text-align: center;
  }
`;

const Div1 = styled.div`
  margin: 10px;
`;
const Image = styled.img`
  width: 7rem;
`;
const Div2 = styled.div`
  width: 100%;
  position: relative;
  // background-color: rgba(255, 255, 255, 0.7);
  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 18px;
  //   left: 11%;
  //   width: 70%;
  //   height: 69%;
  //   background-image: url(${Image2}); // Set the background image here
  //   background-size: cover; /* Adjust this based on your image size and layout requirements */
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   opacity: 0.1; /* Set the desired opacity level here (0.7 for 70% opacity) */
  // }
  // @media (max-width: 768px) {
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     top: 18px;
  //     left: 21%;
  //     width: 50%;
  //     height: 69%;
  //     background-image: url(${Image2}); // Set the background image here
  //     background-size: cover; /* Adjust this based on your image size and layout requirements */
  //     background-repeat: no-repeat;
  //     background-position: center;
  //     opacity: 0.1; /* Set the desired opacity level here (0.7 for 70% opacity) */
  //   }
  }
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Heading3 = styled.h3`
  // font-family: Google Sans Regular;
  font-family: "Open Sans", sans-serif;

  margin: 10px 7px 2px 0;
  text-align: left;
  color: rgb(0, 28, 85);
  font-size: 1.17em;
  margin-block-start: 1em;
  // margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;
const Heading4 = styled.p`
  font-family: "Open Sans", sans-serif;
  margin: 0;
  text-align: left;
  color: rgb(0, 28, 85);
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const P1 = styled.p`
  font-family: "Open Sans", sans-serif;
  margin: 10px 0 2px;
  text-align: right;
  color: rgb(0, 28, 85);
  @media (max-width: 768px) {
    margin-top: 2px;
    text-align: center;
  }
`;
const P2 = styled.p`
  font-family: "Open Sans", sans-serif;
  margin: 0;
  text-align: right;
  color: rgb(0, 28, 85);
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const P3 = styled.p`
  margin-top: 5px;
  margin-left: 10px;
  text-align: justify;
  margin-right: 20px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 768px) {
    text-align: justify;
  }
`;
const Div4 = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: auto;
  @media (max-width: 768px) {
    float: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Div5 = styled.div`
  float: right;
  margin-left: auto;
  margin-right: 10px;
  @media (max-width: 768px) {
    float: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: rgb(0, 28, 85);
`;
// const data = experience.map((experience, index) => {
//   experience.title;
// });
// console.log(data);
const CompanyCard = () => {
  const workExperience = experience.sections.find(
    (section) => section.title === "Work"
  );

  if (!workExperience) {
    // Handle the case when there is no work experience data
    return null; // Or display a message or default content
  }

  const {
    title,
    company,
    company_url,
    duration,
    location,
    description,
    logo_path,
  } = workExperience.experiences[0];
  const data = workExperience.experiences;
  return data.map((experience, index) => (
    <Div style={{ border: `1px solid ${experience.color}` }}>
      <Div1>
        <Image
          src={require(`../../assets/Company/${experience.logo_path}`)}
          alt="logo"
          rel="noopener noreferrer"
          target="_blank"
        />
      </Div1>
      <Div2>
        <Div3>
          <Div4>
            <Heading3>{experience.title}</Heading3>
            <Heading4>
              <Link href={experience.company_url}>{experience.company}</Link>
            </Heading4>
          </Div4>
          <Div5>
            <P1>{experience.duration}</P1>
            <P2>{experience.location}</P2>
          </Div5>
        </Div3>
        <P3>{experience.description}</P3>
      </Div2>
    </Div>
  ));
};

export default CompanyCard;
