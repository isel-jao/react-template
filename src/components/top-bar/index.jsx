/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import i18next from "i18next";
import Select from "../../components/select";
import sunIcon from "../../assets/icons/Solid/General/Sun.svg";
import moonIcon from "../../assets/icons/Solid/General/Moon.svg";
import expandIcon from "../../assets/icons/Solid/Interface/Expand.svg";
import collapseIcon from "../../assets/icons/Solid/Interface/Collapse.svg";
import Toggle from "../toggle";
import englishFlag from "../../assets/icons/Flag/English.svg";
import frenchFlag from "../../assets/icons/Flag/French.svg";
const TopBar = ({ height, className }) => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (config.theme === "light") {
      dispatch({ type: "SET_THEME", payload: "dark" });
    } else {
      dispatch({ type: "SET_THEME", payload: "light" });
    }
  };
  const light = {
    value: "light",
    label: <img src={moonIcon} alt="dark" />,
  };
  const dark = {
    value: "dark",
    label: <img src={sunIcon} className="rotate" alt="light" />,
  };
  const fullscreen = {
    value: true,
    label: <img src={collapseIcon} alt="fullscreen" />,
  };
  const normal = {
    value: false,
    label: <img src={expandIcon} alt="normal" />,
  };

  // watch language
  useEffect(() => {
    i18next.changeLanguage(config.lang);
    localStorage.setItem("lang", config.lang);
    console.log("change language", config.lang);
  }, [config.lang]);
  // watch theme
  useEffect(() => {
    localStorage.setItem("theme", config.theme);
  }, [config.theme]);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const languages = [
    {
      value: "en",
      label: <img className="w-1" src={englishFlag} alt="english" />,
    },
    {
      value: "fr",
      label: <img className="w-1" src={frenchFlag} alt="french" />,
    },
  ];

  return (
    <div
      style={height ? { height } : {}}
      className={`flex align-center justify-between dark:bg-${config.primaryColor}-800 bg-${config.primaryColor}-50 ${className}`}
    >
      <div className="flex gap-2 px-3 align-center">
        <div>logo</div>
      </div>
      {JSON.stringify(config)}

      <div className="flex gap-2 px-3">
        <Toggle
          className=" flex justify-center aligng-center"
          active={fullscreen}
          inactive={normal}
          value={isFullscreen}
          onChange={(value) => {
            if (value) document.getElementById("root").requestFullscreen();
            else document.exitFullscreen();
            setIsFullscreen(value);
          }}
        />
        <Toggle
          className=" flex justify-center aligng-center"
          active={light}
          inactive={dark}
          value={config.theme}
          onChange={(value) => {
            dispatch({ type: "SET_THEME", payload: value });
          }}
        />
        <Select
          value={config.lang}
          options={languages}
          onChange={(value) => dispatch({ type: "SET_LANG", payload: value })}
        ></Select>
      </div>
    </div>
  );
};

export default TopBar;
