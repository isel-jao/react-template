/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import caretDwon from "../../assets/icons/Solid/Interface/Caret down.svg";
const SelectStyled = styled.div`
  cursor: pointer;
  position: relative;
  .options {
    position: absolute;
    top: 100%;
    & > *:hover {
      background-color: #00000020;
    }
  }
  .options {
    max-height: 200px;
    overflow-y: auto;
  }
  img {
    transition: transform 250ms ease-in-out;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;
const Select = ({
  value,
  onChange,
  placeHolder,
  options,
  className,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const handleChange = (value) => {
    console.log("value", value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectStyled>
      <div
        className={`value flex justify-beteween ${className}`}
        onClick={() => {
          setShow(!show);
        }}
      >
        {value
          ? options.find((option) => option.value === value).label
          : placeHolder}
        {props.Icon && (
          <img
            src={caretDwon}
            className={show ? "rotate" : ""}
            alt="CaretDown"
          />
        )}
        <div
          className={`options ${props.optionsClassName}`}
          style={props.optionsStyle}
        >
          {show &&
            options.map((option, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleChange(option.value);
                  }}
                >
                  {option.label}
                </div>
              );
            })}
        </div>
      </div>
    </SelectStyled>
  );
};
export default Select;
