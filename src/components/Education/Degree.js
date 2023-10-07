import React from "react";
import styled from "styled-components";
import { Container, Col, Row, Image } from "react-bootstrap";
import Img from "../../assets/mum.png";
import { Slide, Flip } from "react-awesome-reveal";
import { degree } from "../../portfolio";
const DegreeCardContainer = styled.div`
  background-color: rgb(237, 249, 254);

  display: flex;
  width: 100%;
  // margin-left: 4%;
  // margin-right: 4%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LogoImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  transform: scale(0.9);
`;
const CardTitle = styled.h2`
  font-family: "Google Sans Medium";
  font-size: 23px;
  font-weight: 550;
  font-family: Google Sans Medium;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardSubtitle = styled.h3`
  font-family: "Google Sans Medium";
  font-size: 18px;
  margin-top: 7px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardImage = styled.div`
  width: 200px;
  height: auto;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid #d9dbdf;
  /* background-color: #6c63ff; */
  /* background: transparent; */
  box-shadow: 5px 5px 5px #d9dbdf;

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
const Div1 = styled.div`
  border-bottom: 1px solid #d9dbdf;
  border-left: 1px solid #d9dbdf;
  border-right: 1px solid #d9dbdf;
  border-radius: 7px;
  margin: 10px;
  margin-left: 27px;
  width: 100% !important;
  box-shadow: 5px 5px 5px #d9dbdf;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90% !important;
  }
`;

const BodyHeader = styled.div`
  background-color: rgba(14, 107, 168, 0.467);
  max-width: inherit;
  display: flex;
  border-radius: 7px 7px 0px 0px;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BodyHeaderTitle = styled.div`
  align-items: flex-start;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BodyHeaderDuration = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

const Duration = styled.h3`
  font-family: "Google Sans Regular";
  font-size: 16px;
  padding-right: 10px;
  float: right;
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
    float: left;
  }
`;

const BodyContent = styled.div`
  max-width: inherit;
  border-radius: 0px 0px 7px 7px;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

const ContentList = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Google Sans Regular";
`;
const Heading = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-weight: bold;
  line-height: 1.1;
  font-size: 40px;
  color: rgb(0, 28, 85);
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const CardBody = styled.div`
  border-bottom: 1px solid #d9dbdf;
  border-left: 1px solid #d9dbdf;
  border-right: 1px solid #d9dbdf;
  border-radius: 7px;
  margin: 10px;
  box-shadow: 5px 5px 5px #d9dbdf;
`;

const VisitButton = styled.div`
  display: inline-block;
  margin: -39px 10px 10px 0px;
  padding: 10px;
  border-radius: 7px;
  border: 0px;
  float: right;
  cursor: pointer;
  // background-color: #6c63ffcc;
`;

const ButtonText = styled.p`
  padding: 0px;
  font-family: "Google Sans Regular";
  &:hover {
  }
`;

const DegreeCard = () => {
  return (
    <>
      <Slide direction="up" duration={1000} triggerOnce={true} delay={0}>
        <Heading>Degrees Received</Heading>
      </Slide>
      <div>
        {degree.map((deg, index) => (
          <DegreeCardContainer key={index}>
            {/* <Row>
        <Col xs={2} md={3}> */}
            <Flip direction="left">
              <CardImage>
                <LogoImage src={require(`../../assets/${deg.logo_path}`)} />
              </CardImage>
            </Flip>
            {/* </Col> */}
            {/* <Col xs={18} md={9}> */}
            <Slide
              direction="right"
              triggerOnce
              delay={400}
              style={{ width: "90%", height: "110%" }}
            >
              <Div1>
                <BodyHeader>
                  <BodyHeaderTitle>
                    <CardTitle style={{ color: "rgb(0, 28, 85)" }}>
                      {deg.title}
                    </CardTitle>
                    <CardSubtitle style={{ color: "rgb(0, 28, 85)" }}>
                      {deg.subtitle}
                    </CardSubtitle>
                  </BodyHeaderTitle>
                  <BodyHeaderDuration>
                    <Duration>{deg.duration}</Duration>
                  </BodyHeaderDuration>
                </BodyHeader>
                <BodyContent>
                  {deg.descriptions.map((des, index) => (
                    <ContentList
                      key={index}
                      style={{ color: "rgb(0, 28, 85)" }}
                    >
                      {des}
                    </ContentList>
                  ))}
                  <a
                    href={deg.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VisitButton>
                      <ButtonText style={{ color: "rgb(0, 28, 85)" }}>
                        Visit Website
                      </ButtonText>
                    </VisitButton>
                  </a>
                </BodyContent>
              </Div1>
            </Slide>
          </DegreeCardContainer>
        ))}
      </div>
    </>
  );
};

export default DegreeCard;
{
  /* <Row md={6}>
            <CardImage>
              <img src={Img} />
            </CardImage>
          </Row>
          <Row md={6}>
            <div>
              <BodyHeader style={{ backgroundColor: "black" }}>
                <BodyHeaderTitle>
                  <CardTitle style={{ color: "black" }}>hbsrtbd</CardTitle>
                  <CardSubtitle style={{ color: "black" }}>
                    dsfgstrf
                  </CardSubtitle>
                </BodyHeaderTitle>
                <BodyHeaderDuration>
                  <Duration>sdrytgws54ter</Duration>
                </BodyHeaderDuration>
              </BodyHeader>
              <BodyContent>
                <ContentList style={{ color: "black" }}>HBITFU</ContentList>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <VisitButton>
                    <ButtonText style={{ color: "black" }}>
                      Visit Website
                    </ButtonText>
                  </VisitButton>
                </a>
              </BodyContent>
            </div>
          </Row> */
}
