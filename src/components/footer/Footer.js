import { Container } from "react-bootstrap";
import styled from "styled-components";

const Paragraph = styled.p`
  color: rgb(127, 141, 170);
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  background-color: rgb(237, 249, 254);
  font-family: Google Sans Regular;
  padding: 10px;
  margin-bottom: 0px !important;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;
function Footer() {
  return (
    <div style={{ marginTop: "7rem", backgroundColor: "rgb(237, 249, 254)" }}>
      <Paragraph>
        {" "}
        Made with ❤️ © {new Date().getFullYear()} Ruturaj Salunkhe
      </Paragraph>
    </div>
  );
}
export default Footer;
