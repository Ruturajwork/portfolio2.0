import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Collapse, Card, Stack, Accordion } from "react-bootstrap";
import Lottie from "lottie-react";
import styled from "styled-components";
import Project from "../../animation/project2.json";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import Shopsite from "../../assets/projects/shopsite.png";
import Button from "../Button";
import { IconContext } from "react-icons";
import { Projects } from "../../portfolio";

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center;
  justify-content: center;
`;

export const ButtonSettings = styled(Button)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const CardText = styled(Card.Text)`
  color: rgb(127, 141, 170);
  font-size: 18px;
  font-family: "Google Sans Regular";
  @media (max-width: 768px) {
    font-size: 15px;
    text-align: justify;
  }
`;
const StyledCard = styled(Card)`
  width: 24rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: rgb(217, 219, 223) 5px 5px 5px;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    backdrop-filter: none; /* Remove the blur effect on hover */
  }

  @media (max-width: 768px) {
    margin-left: 5rem;
    width: 18rem;
  }
  @media (max-width: 418px) {
    margin-left: 3rem;
  }
  @media (max-width: 366px) {
    width: 15rem;
  }
  @media (max-width: 304px) {
    width: 11rem;
  }
`;

const ProjectCard = () => {
  const [open, setOpen] = useState(false);
  const [openCard, setOpenCard] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleCard = (projectId) => {
    setOpenCard((prevOpenCard) =>
      prevOpenCard === projectId ? null : projectId
    );
  };

  const toggleDescription = (projectId) => {
    setExpandedDescriptions((prevExpanded) => ({
      ...prevExpanded,
      [projectId]: !prevExpanded[projectId],
    }));
  };

  // const toggleCard = () => {
  //   setOpen(!open);
  // };
  const cardTitle = {
    fontFamily: `"Open Sans", sans-seri`,
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px",
    color: "rgb(127, 141, 170)",
  };
  return (
    <>
      <Container>
        <Div1>
          {Projects.map((project) => (
            <StyledCard
              key={project.id}
              style={{
                border: `1px solid ${project.backgroundColor}`,
                // backgroundColor: " rgb(166, 225, 250)",
              }}
            >
              {project.imgPath ? (
                <Card.Img
                  variant="top"
                  src={require(`../../assets/projects/${project.imgPath}`)}
                  style={{
                    border: "1px solid #d9dbdf",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px #d9dbdf",
                  }}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={Shopsite}
                  style={{
                    border: "1px solid #d9dbdf",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px #d9dbdf",
                  }}
                />
              )}

              <Card.Body>
                <Card.Title style={cardTitle}>{project.name}</Card.Title>
                <CardText>{project.description}</CardText>
                <Div2>
                  <Div3>
                    <Stack
                      direction="horizontal"
                      gap={3}
                      onClick={() => toggleCard(project.id)}
                      aria-controls={`collapse-${project.id}`}
                      aria-expanded={openCard === project.id}
                      style={{
                        borderColor: "rgb(68 112 201)",
                        borderRadius: "5px",
                        border: "1px solid ",
                        cursor: "pointer",
                        borderBottom: "1px solid #001c55",
                        width: "100%",
                      }}
                    >
                      <div
                        className="p-2"
                        style={{
                          color: "rgb(127, 141, 170)",
                          fontSize: "1.1rem",
                          fontWeight: "700",
                        }}
                      >
                        Features
                      </div>
                      <div className="p-2 ms-auto">
                        {openCard === project.id ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </div>
                    </Stack>
                    <Collapse in={openCard === project.id}>
                      <div
                        id={`collapse-${project.id}`}
                        className={`my-collapse ${
                          openCard === project.id ? "show" : ""
                        }`}
                        style={{
                          color: "rgb(127, 141, 170)",
                          fontSize: "18px",
                          fontFamily: "Google Sans Regular",
                          // position: "absolute",
                          // zIndex: "100",
                          // backgroundColor: "rgb(255, 255, 255)",
                          // paddingTop: "1rem",
                          // marginTop: "3rem",
                          marginTop: "1rem",
                        }}
                      >
                        {project.features}
                      </div>
                    </Collapse>
                  </Div3>
                  <SocialMediaWrapper>
                    <IconContext.Provider
                      value={{ color: "#001c55", size: "1.5rem" }}
                    >
                      {project.languages.map((language, index) => (
                        <div key={index} style={{ padding: "4px" }}>
                          {language.iconifyClass}
                          {console.log(language.iconifyClass)}
                        </div>
                      ))}
                    </IconContext.Provider>
                  </SocialMediaWrapper>
                </Div2>
                <Div2>
                  {" "}
                  <Button text={"Browse Code"} href={project.url} />
                  <Button text={"Live"} href={project.projectUrl} />
                </Div2>
              </Card.Body>
            </StyledCard>
          ))}
        </Div1>
        <ButtonSettings
          text={"More Projects"}
          href="https://github.com/ruturajwork/"
        />
      </Container>
    </>
  );
};
export default ProjectCard;
