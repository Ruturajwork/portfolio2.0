// import React from "react";
// import styled from "styled-components";
// import {
//   DiJavascript1,
//   DiNodejs,
//   DiHtml5,
//   DiCss3,
//   DiReact,
//   DiMongodb,
// } from "react-icons/di";
// import { TbBrandReactNative } from "react-icons/tb";
// import {
//   SiRedux,
//   SiChakraui,
//   SiVisualstudiocode,
//   SiPostman,
//   SiFigma,
//   SiKubernetes,
//   SiAntdesign,
//   SiDocker,
//   SiHeroku,
//   SiBootstrap,
//   SiMaterialdesign,
//   SiNetlify,
//   SiExpress,
//   SiVercel,
//   SiElectron,
//   SiTerraform,
//   SiPhp,
//   SiMysql,
//   SiSelenium,
// } from "react-icons/si";
// import { AiFillGithub } from "react-icons/ai";
// import { DiLinux } from "react-icons/di";
// import { Slide, Zoom } from "react-awesome-reveal";
// import { Container } from "react-bootstrap";
// const StyledFlex = styled.div`
//   display: flex;
//   cursor: pointer;
//   // display: inline-block;
//   flex-direction: row;
//   border: 1px solid rgb(8, 121, 191);
//   padding: 0.8rem;
//   text-align: center;
//   align-items: center;
//   transition: box-shadow 0.3s;
//   border-radius: 0.375rem;
//   backdrop-filter: saturate(180%) blur(10px);
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -webkit-transition: 0.3s ease-in-out;
//   transition: 0.3s ease-in-out;

//   &:hover {
//     -webkit-transform: scale(1.05);
//     transform: scale(1.05);
//   }

//   //   &:hover {
//   //     box-shadow: 3px 3px 1px black;
//   //   }
// `;
// const Div1 = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-flow: wrap;
//   justify-content: center;
//   // align-items: center;
//   flex-wrap: wrap;
//   padding-left: 2px;
//   gap: 2rem;
// `;
// const StyledIcon = styled.div`
//   display: flex;
//   margin: 3px;
//   //   border-width: 2px;
//   //   border-style: solid;
//   /* Add your additional icon styles here */
// `;

// const StyledHeading = styled.h3`
//   font-size: 1.2rem;
//   margin-bottom: 0rem !important;
// `;
// const MainHeader = styled.h1`
//   font-size: 40px;
//   color: rgb(0, 28, 85);
//   opacity: 0.9;
//   margin: 1.5rem;
//   // padding-bottom: 2rem;
//   font-weight: 500;
//   font-family: "Open Sans", sans-serif;
//   text-align: center;
//   font-weight: bold;
//   line-height: 1.1;

//   @media (max-width: 768px) {
//     font-size: 30px;
//   }
// `;
// const Card = ({ children, ic, iconSize = "1.2rem", ...props }) => {
//   const skill = [
//     { skill: "HTML", ic: DiHtml5 },
//     { skill: "CSS", ic: DiCss3 },
//     { skill: "Chakra UI", ic: SiChakraui },
//     { skill: "Bootstrap", ic: SiBootstrap },
//     { skill: "Material-ui", ic: SiMaterialdesign },
//     { skill: "Ant-Design", ic: SiAntdesign },
//     { skill: "JavaScript", ic: DiJavascript1 },
//     { skill: "React Js", ic: DiReact },
//     { skill: "React Native", ic: TbBrandReactNative },
//     { skill: "Node js", ic: DiNodejs },
//     { skill: "Mongo DB", ic: DiMongodb },
//     { skill: "Redux", ic: SiRedux },
//     { skill: "Express-js", ic: SiExpress },
//     { skill: "Electron", ic: SiElectron },
//     { skill: "Docker", ic: SiDocker },
//     { skill: "Heroku", ic: SiHeroku },
//     { skill: "Netlify", ic: SiNetlify },
//     { skill: "Vercel", ic: SiVercel },
//     { skill: "Kubernetes", ic: SiKubernetes },
//     { skill: "Terraform", ic: SiTerraform },
//     { skill: "PHP", ic: SiPhp },
//     { skill: "MySQL", ic: SiMysql },
//     { skill: "Selenium", ic: SiSelenium },
//   ];
//   const tools = [
//     { skill: "Linux", ic: DiLinux },
//     { skill: "VsCode", ic: SiVisualstudiocode },
//     { skill: "PostMan", ic: SiPostman },
//     { skill: "Figma", ic: SiFigma },
//     { skill: "Git", ic: AiFillGithub },
//   ];

//   return (
//     <>
//       <Container>
//         <Slide direction="up" duration={1000} triggerOnce={true} delay={0}>
//           <MainHeader>Profesional Skillset</MainHeader>
//         </Slide>
//         <Zoom>
//           <Div1>
//             {skill.map((item, index) => {
//               const IconComponent = item.ic; // Get the icon component dynamically
//               return (
//                 <StyledFlex {...props} key={index}>
//                   <StyledIcon>
//                     <IconComponent size={iconSize} />{" "}
//                     {/* Use the dynamic icon component */}
//                   </StyledIcon>
//                   <StyledHeading my="3">{item.skill}</StyledHeading>
//                 </StyledFlex>
//               );
//             })}
//           </Div1>
//         </Zoom>
//         <Slide direction="up" duration={1000} triggerOnce={true} delay={0}>
//           <MainHeader>Tools I Used</MainHeader>
//         </Slide>
//         <Zoom>
//           <Div1>
//             {tools.map((item, index) => {
//               const IconComponent = item.ic; // Get the icon component dynamically
//               return (
//                 <StyledFlex {...props} key={index}>
//                   <StyledIcon>
//                     <IconComponent size={iconSize} />{" "}
//                     {/* Use the dynamic icon component */}
//                   </StyledIcon>
//                   <StyledHeading my="3" fontSize="3xl">
//                     {item.skill}
//                   </StyledHeading>
//                 </StyledFlex>
//               );
//             })}
//           </Div1>
//         </Zoom>
//       </Container>
//     </>
//   );
// };

// export default Card;
import React from "react";
import styled from "styled-components";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
  DiLinux,
} from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiKubernetes,
  SiAntdesign,
  SiDocker,
  SiHeroku,
  SiBootstrap,
  SiMaterialdesign,
  SiNetlify,
  SiExpress,
  SiVercel,
  SiElectron,
  SiTerraform,
  SiPhp,
  SiMysql,
  SiSelenium,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiNestjs,
  SiPassport,
  SiSocketdotio,
  SiJest,
  SiCypress,
  SiPrisma,
  SiReact,
  SiGithub,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Slide, Zoom } from "react-awesome-reveal";
import { Container } from "react-bootstrap";

const StyledFlex = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  border: 1px solid rgb(8, 121, 191);
  padding: 0.8rem;
  text-align: center;
  align-items: center;
  transition: box-shadow 0.3s, transform 0.3s ease-in-out;
  border-radius: 0.375rem;
  backdrop-filter: saturate(180%) blur(10px);

  &:hover {
    transform: scale(1.05);
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 1rem;
  // padding: 1rem 0;
`;

const StyledIcon = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

const StyledHeading = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

const MainHeader = styled.h1`
  font-size: 40px;
  color: rgb(0, 28, 85);
  margin: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

// Generic card component
const SkillCard = ({ skill, ic, iconSize = "1.5rem" }) => {
  const IconComponent = ic;
  return (
    <StyledFlex>
      <StyledIcon>
        <IconComponent size={iconSize} />
      </StyledIcon>
      <StyledHeading>{skill}</StyledHeading>
    </StyledFlex>
  );
};

const ProfesionalSkillset = () => {
  const skills = {
    Frontend: [
      { skill: "HTML", ic: DiHtml5 },
      { skill: "CSS", ic: DiCss3 },
      { skill: "JavaScript", ic: DiJavascript1 },
      { skill: "TypeScript", ic: SiTypescript },
      { skill: "React.js", ic: DiReact },
      { skill: "React Native", ic: TbBrandReactNative },
      { skill: "NextJS", ic: SiNextdotjs },
      { skill: "Chakra UI", ic: SiChakraui },
      { skill: "Material-UI", ic: SiMaterialdesign },
      { skill: "Ant Design", ic: SiAntdesign },
      { skill: "Bootstrap", ic: SiBootstrap },
      { skill: "React Query / SWR", ic: SiReact },
      { skill: "Framer Motion / GSAP", ic: SiFigma },
      { skill: "PWA", ic: SiFigma },
    ],
    Backend: [
      { skill: "Node.js", ic: DiNodejs },
      { skill: "Express.js", ic: SiExpress },
      { skill: "NestJS", ic: SiNestjs },
      { skill: "GraphQL", ic: SiGraphql },
      { skill: "JWT / OAuth", ic: SiPassport },
      { skill: "WebSockets / Socket.io", ic: SiSocketdotio },
      { skill: "Serverless Functions", ic: FaAws },
      { skill: "Microservices Architecture", ic: FaAws },
    ],
    Database: [
      { skill: "MongoDB", ic: DiMongodb },
      { skill: "MySQL", ic: SiMysql },
      { skill: "PostgreSQL", ic: SiMysql },
      { skill: "Redis / Memcached", ic: SiMysql },
      { skill: "Prisma ORM", ic: SiPrisma },
      { skill: "Elasticsearch", ic: SiMysql },
    ],
    DevOps: [
      { skill: "Docker", ic: SiDocker },
      { skill: "Kubernetes", ic: SiKubernetes },
      { skill: "Terraform", ic: SiTerraform },
      { skill: "AWS / Cloud", ic: FaAws },
      { skill: "CI/CD", ic: SiGithub },
      { skill: "Heroku", ic: SiHeroku },
      { skill: "Netlify", ic: SiNetlify },
      { skill: "Vercel", ic: SiVercel },
      { skill: "Nginx / Apache", ic: DiLinux },
      { skill: "Monitoring / Logging", ic: SiKubernetes },
    ],
    Testing: [
      { skill: "Jest", ic: SiJest },
      { skill: "Mocha / Chai", ic: SiJest },
      { skill: "React Testing Library", ic: SiJest },
      { skill: "Cypress / Playwright", ic: SiCypress },
      { skill: "Performance Testing", ic: SiCypress },
    ],
    Tools: [
      { skill: "Linux", ic: DiLinux },
      { skill: "VsCode", ic: SiVisualstudiocode },
      { skill: "Postman", ic: SiPostman },
      { skill: "Figma", ic: SiFigma },
      { skill: "Git", ic: AiFillGithub },
    ],
  };

  return (
    <Container>
      {Object.keys(skills).map((category, idx) => (
        <div key={idx}>
          <Slide direction="up" duration={1000} triggerOnce delay={idx * 200}>
            <MainHeader>{category}</MainHeader>
          </Slide>
          <Zoom>
            <Div1>
              {skills[category].map((item, index) => (
                <SkillCard
                  key={index}
                  skill={item.skill}
                  ic={item.ic}
                  iconSize="1.5rem"
                />
              ))}
            </Div1>
          </Zoom>
        </div>
      ))}
    </Container>
  );
};

export default ProfesionalSkillset;
