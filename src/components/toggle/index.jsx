import React from "react";
import styled from "styled-components";
const ToggleStyled = styled.div`
  cursor: pointer;
`;
const Toggle = ({ active, inactive, onChange, ...props }) => {
  const handleChange = () => {
    if (props.value === active.value) {
      onChange(inactive.value);
    } else {
      onChange(active.value);
    }
  };

  return (
    <ToggleStyled onClick={handleChange} className={`${props.className}`}>
      {props.value === active.value ? active.label : inactive.label}
    </ToggleStyled>
  );
};
export default Toggle;
