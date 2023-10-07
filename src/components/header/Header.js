import React, { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import logo from "../../assets/logo.png";
import styled from "styled-components"; // Import styled-components
import "bootstrap/dist/css/bootstrap.min.css";

// Create a styled component for the Navbar
const StyledNavbar = styled(Navbar)`
  background-color: rgb(237, 249, 254);
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  /* Add any other styles you want for the Link component here */
`;
// Create a styled component for the Nav.Link
const StyledNavLink = styled(Nav.Link)`
  padding-left: 1rem !important;
  color: rgb(0, 28, 85);
  font-size: 1.1rem;
  text-decoration: none; /* Remove underline */

  &:after {
    background-color: black;
  }
`;
function Header() {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const onMouseEnter = (event) => {
    const el = event.target;
    el.style.backgroundColor = "#A6E1FA";
  };

  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };

  const handleLinkClick = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 1000);
  };

  return (
    <Fade direction="down">
      {/* Use the StyledNavbar component */}
      <StyledNavbar
        collapseOnSelect
        className="headers-color"
        data-bs-theme="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src={logo} style={{ width: "64%" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ padding: "1rem" }}
          >
            <Nav className="ms-auto">
              {/* Use the StyledNavLink component for each link */}
              <StyledLink to="/" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                  href="/home"
                >
                  Home
                </StyledNavLink>
              </StyledLink>
              <StyledLink to="/education" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  href="/education"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  Education
                </StyledNavLink>
              </StyledLink>
              <StyledLink to="/experience" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  href="/experience"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  Experience
                </StyledNavLink>
              </StyledLink>
              <StyledLink to="/projects" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  href="/projects"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  Projects
                </StyledNavLink>
              </StyledLink>
              {/* <StyledLink to="/opensource" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  href="/opensource"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  Open Source
                </StyledNavLink>
              </StyledLink> */}
              <StyledLink to="/contact" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  href="/contact"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  Contact Me
                </StyledNavLink>
              </StyledLink>
              <StyledLink to="/resume" className="linkNav">
                <StyledNavLink
                  className="nav-link-with-padding"
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                  href="/resume"
                >
                  Resume
                </StyledNavLink>
              </StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </Fade>
  );
}

export default Header;
