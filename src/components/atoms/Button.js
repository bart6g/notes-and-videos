import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  width: 140px;
  height: 38px;
  font-size: 18px;
  font-family: Monsterrat, sans-serif;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  visibility: ${(props) => (props.page === "home" ? "hidden" : "visible")};
  transition: translate 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      width: 30px;
      height: 30px;
      position: absolute;
      top: 15px;
      right: 5px;
      transform: translate(-5px, -5px);
      text-transform: uppercase;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
const Button = ({ children, page, handleClick, close, secondary }) => {
  return (
    <Btn page={page} onClick={() => handleClick(close)} secondary={secondary}>
      {" "}
      {children}
    </Btn>
  );
};

export default Button;
