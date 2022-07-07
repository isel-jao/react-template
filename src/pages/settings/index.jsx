/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Card from "../../components/card";
import Button from "../../components/button";
import { useSelector, useDispatch } from "react-redux";
import themeColors from "../../utils/color";
const SettingsStyled = styled.div`
  width: 90%;
  height: 80vh;
`;
const Settings = () => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const colors = Object.keys(themeColors).filter(
    (color) => color !== "light" && color !== "dark"
  );
  return (
    <SettingsStyled>
      <Card>
        <div className="text-lg text-center my-3 ">
          <span className="outline-cyan-500  px-3 py-1 rounded-lg">theme</span>
        </div>
        <div className="flex justify-center gap-3">
          <Button
            color="cyan"
            onClick={() => {
              dispatch({ type: "SET_THEME", payload: "light" });
              localStorage.setItem("theme", "light");
            }}
          >
            light
          </Button>
          <Button
            color="slate"
            onClick={() => {
              dispatch({ type: "SET_THEME", payload: "dark" });
              localStorage.setItem("theme", "dark");
            }}
          >
            dark
          </Button>
        </div>
        <div className="w-full h-18">
          <div className="text-lg text-center my-3 ">
            <span className="outline-cyan-500  px-3 py-1 rounded-lg">
              primary color
            </span>
          </div>
          <div className="">
            {colors.map((color, index) => {
              return (
                <Button
                  outline
                  key={index}
                  color={color}
                  className="w-2 h-1 m-1"
                  onClick={() => {
                    console.log(color);
                    dispatch({ type: "SET_PRIMARY_COLOR", payload: color });
                    localStorage.setItem("primaryColor", color);
                  }}
                ></Button>
              );
            })}
          </div>
        </div>
      </Card>
    </SettingsStyled>
  );
};

export default Settings;
