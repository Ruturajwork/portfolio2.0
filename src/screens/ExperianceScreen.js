import { Container } from "react-bootstrap";
import ExperianceCard from "../components/Experiance/ExperianceCard";
import MyExperiance from "../components/Experiance/MyExperiance";
import TopButton from "../components/TopButton/TopButton";
const ExperienceScreen = () => {
  return (
    <Container>
      <div>
        <ExperianceCard />
        <MyExperiance />
      </div>
      <TopButton />
    </Container>
  );
};
export default ExperienceScreen;
