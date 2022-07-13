/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    border: none;
  }
`;

const Button = ({
  children,
  disabled,
  outline,
  color,
  style,
  onClick,
  className,
}) => {
  const handlClick = () => {
    onClick && onClick();
  };
  const outlineClass = `rounded-md p-2 outline-${color}-500 hover:bg-${color}-600 text-${color}-500 hover:text-light text-lg active:bg-${color}-800 ${className} `;
  const solidClass = `rounded-md p-2 bg-${color}-500 hover:bg-${color}-600 text-light text-lg active:bg-${color}-800 ${className} `;

  const disabledClass = `rounded-md p-2 bg-gray-300 text-light text-lg active:bg-gray-300 ${className} `;
  return (
    <ButtonStyled
      onClick={handlClick}
      style={style || {}}
      className={outline ? outlineClass : solidClass}
    >
      {children || color || "button"}
    </ButtonStyled>
  );
};

export default Button;
