import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/icons/html.png";
import Arrow1 from "../../assets/icons/html1.png";
import Reacts from "../../assets/icons/react.png";
import React1 from "../../assets/icons/react1.png";
import Docker from "../../assets/icons/Docker.png";
import Docker1 from "../../assets/icons/Docker1.png";
import Css from "../../assets/icons/Css.png";
import Css1 from "../../assets/icons/Css1.png";
import Javascript from "../../assets/icons/javascript.png";
import Javascript1 from "../../assets/icons/javascript1.png";
import Mongodb from "../../assets/icons/Mongodb.png";
import Mongodb1 from "../../assets/icons/Mongodb1.png";
import Node from "../../assets/icons/Node.png";
import Node1 from "../../assets/icons/Node1.png";
import Npm from "../../assets/icons/Npm.png";
import Npm1 from "../../assets/icons/Npm1.png";
import Php from "../../assets/icons/Php.png";
import Php1 from "../../assets/icons/Php1.png";
import Postgresql from "../../assets/icons/Postgresql.png";
import Postgresql1 from "../../assets/icons/Postgresql1.png";
import Redux from "../../assets/icons/Redux.png";
import Redux1 from "../../assets/icons/Redux1.png";
import Sass from "../../assets/icons/Sass.png";
import Sass1 from "../../assets/icons/Sass1.png";
import Sql from "../../assets/icons/Sql.png";
import Sql1 from "../../assets/icons/Sql1.png";
import Yarn from "../../assets/icons/Yarn.png";
import Yarn1 from "../../assets/icons/Yarn1.png";

const Div = styled.div`
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const ImageContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-image: url(${(props) => props.backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  //  background-color: ${(props) => props.backgroundColor || "#86fde8"};
  transition: background-image 0.25s ease-in-out;
  margin: ${(props) => props.margin};
  &:not(:last-child) {
    margin: 15px;
  }

  &:hover {
    background-image: url(${(props) => props.hoverBackgroundImage});
    // background-color: ${(props) => props.hoverBackgroundColor || "#7fe8fd"};
  }

  &:hover::before {
    content: attr(title);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
    white-space: nowrap;
  }

  &:hover::before {
    opacity: 1;
  }
  @media (max-width: 1380px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const skillImage = [
  {
    id: 1,
    imageUrl: Arrow1,
    hoverImageUrl: Arrow,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#d94a24",
    name: "HTML",
  },
  {
    id: 2,
    imageUrl: React1,
    hoverImageUrl: Reacts,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#00ff00",
    name: "React",
  },
  {
    id: 3,
    imageUrl: Docker1,
    hoverImageUrl: Docker,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Docker",
  },
  {
    id: 4,
    imageUrl: Css1,
    hoverImageUrl: Css,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "CSS",
  },
  {
    id: 5,
    imageUrl: Javascript1,
    hoverImageUrl: Javascript,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Javascript",
  },
  {
    id: 6,
    imageUrl: Mongodb1,
    hoverImageUrl: Mongodb,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Mongodb",
  },
  {
    id: 7,
    imageUrl: Node1,
    hoverImageUrl: Node,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Node Js",
  },
  {
    id: 8,
    imageUrl: Npm1,
    hoverImageUrl: Npm,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Npm",
  },
  {
    id: 9,
    imageUrl: Php1,
    hoverImageUrl: Php,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Php",
  },
  {
    id: 10,
    imageUrl: Redux1,
    hoverImageUrl: Redux,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Redux",
  },
  {
    id: 11,
    imageUrl: Sass1,
    hoverImageUrl: Sass,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Sass",
  },
  {
    id: 12,
    imageUrl: Sql1,
    hoverImageUrl: Sql,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Sql",
  },
  {
    id: 13,
    imageUrl: Yarn1,
    hoverImageUrl: Yarn,
    backgroundColor: "#86fde8",
    hoverBackgroundColor: "#0000ff",
    name: "Yarn",
    margin: "13px",
  },
];

function CardComponent() {
  return (
    <Div>
      {skillImage.map((item) => (
        <ImageContainer
          key={item.id}
          backgroundImage={item.imageUrl}
          hoverBackgroundImage={item.hoverImageUrl}
          backgroundColor={item.backgroundColor}
          hoverBackgroundColor={item.hoverBackgroundColor}
          title={item.name}
          margin={item.margin}
        ></ImageContainer>
      ))}
    </Div>
  );
}

export default CardComponent;
