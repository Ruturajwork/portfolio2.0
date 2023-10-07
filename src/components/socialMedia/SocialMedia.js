import { socialMediaLinks } from "../../portfolio";
import React from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";

export const IconWrapper = styled.a`
  border-radius: 2.6rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1.3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 2.6rem;
  margin-bottom: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.3s ease-in;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.white ? "white" : "black")};

  /* Add a hover effect */
  &:hover {
    background-color: #16124a;
    transition: background-color 0.3s ease-in, transform 0.2s ease-in;
    transform: scale(1.1); /* Increase the scale on hover */
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      {socialMediaLinks.map((media) => (
        <IconWrapper
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
          backgroundColor={media.backgroundColor}
          white={media.backgroundColor === "white"}
          key={media.name}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <div>{media.icon}</div>
          </IconContext.Provider>
        </IconWrapper>
      ))}
    </SocialMediaWrapper>
  );
}
