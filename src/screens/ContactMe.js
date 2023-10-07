import react from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import Project from "../animation/project1.json";
import ProjectInfo from "../components/Projects/ProjectInfo";
import ProjectCard from "../components/Projects/ProjectCard";
import { Zoom } from "react-awesome-reveal";
import TopButton from "../components/TopButton/TopButton";
import ContactCard from "../components/contactMe/ContactCard";
import BlogCart from "../components/contactMe/BlogCart";
import AddressCard from "../components/contactMe/AddreeCard";
const ContactMe = () => {
  return (
    <>
      <ContactCard />
      <BlogCart />
      <AddressCard />
      <TopButton />
    </>
  );
};
export default ContactMe;
