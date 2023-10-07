import React from "react";
import styled from "styled-components";

const MainButton = styled.a`
  background-color: #001c55;
  border: solid 1px #001c55;
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
  margin-top: 20px;
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

export default function Button({ text, className, href, newTab, disabled }) {
  return (
    <div className={className}>
      <MainButton href={href} target={newTab && "_blank"} disabled={disabled}>
        {text}
      </MainButton>
    </div>
  );
}
