import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import TopButton from "../components/TopButton/TopButton";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import MyDetails from "../components/MyDetails";
import styled, { keyframes } from "styled-components";
import Skills from "../components/Skills";
import Footer from "../components/footer/Footer";
import Card from "../components/Home/ProfesionalSkillset";

function HomeScreen() {
  return (
    <div>
      <MyDetails />
      <Skills />
      <Card />
      <TopButton />
      {/* <Footer /> */}
    </div>
  );
}

export default HomeScreen;
