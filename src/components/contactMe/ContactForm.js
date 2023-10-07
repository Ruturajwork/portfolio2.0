import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px dashed;
  border-color: #4ec9c3;
  border-radius: 5px;
  background-color: #dff6f2;
  padding: 20px;
`;

const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Col25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`;

const Col75 = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #9dededad;
  resize: vertical;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.input`
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #45a049;
  }
`;
const Label = styled.label`
  color: rgb(0, 28, 85);
  font-weight: bold;
`;
const MainButton = styled.button`
  background-color: #001c55;
  border: solid 1px #001c55;
  float: right;
  color: #ffffff;
  font-weight: 700;
  width: max-content;
  padding: 13px 22px;
  margin-right: 50px;
  text-transform: uppercase;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    background-color: #edf9fe;
    color: #001c55;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }
  /* Additional styles for disabled button */
  ${({ disabled }) =>
    disabled &&
    `// pointer-events: none;
    opacity: 0.7;
    cursor: not-allowed;
  `}
  /* Media Query */
  @media (max-width: 768px) {
    font-size: 0.938rem;
    padding: 12px 18px;
    margin-right: 0px;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;
const StyledHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  color: rgb(0, 28, 85);
  font-family: "Google Sans Bold";
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const ContactForm = () => {
  return (
    <Container>
      <StyledHeading>Contact Me !</StyledHeading>
      <form action="https://formspree.io/xgejpbkj" method="POST">
        <Row>
          <Col25>
            <Label htmlFor="fname">Full Name</Label>
          </Col25>
          <Col75>
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />
          </Col75>
        </Row>
        <Row>
          <Col25>
            <Label htmlFor="email">Email</Label>
          </Col25>
          <Col75>
            <Input
              type="email"
              id="email"
              name="emailAddress"
              placeholder="Your Email Address"
              required
            />
          </Col75>
        </Row>
        <Row>
          <Col25>
            <Label htmlFor="subject">Subject</Label>
          </Col25>
          <Col75>
            <Textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "50px", backgroundColor: "#9dededad" }}
              required
            />
          </Col75>
        </Row>
        <br />
        <Row>
          <MainButton type="submit">Submit</MainButton>
        </Row>
      </form>
    </Container>
  );
};

export default ContactForm;
