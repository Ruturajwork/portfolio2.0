import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import TopButton from "../components/TopButton/TopButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "../components/Education/Education";
import Degree from "../components/Education/Degree";
import Certifications from "../components/Education/Certiphicate";
import Proficiency from "../components/Education/Proficiency";
import { motion, useScroll, useSpring } from "framer-motion";
import Card from "../components/Home/ProfesionalSkillset";

function EducationScreen() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log("scrollYProgress:", scrollYProgress);
  console.log("scaleX:", scaleX);
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div style={{ backgroundColor: "rgb(237, 249, 254)" }}>
        <Container>
          <Education />
          <Proficiency />
          <Degree />
          {/* <Card /> */}
          <Certifications />
        </Container>
        <TopButton />
      </div>
    </>
  );
}

export default EducationScreen;
