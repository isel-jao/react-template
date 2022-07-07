import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import i18next from "i18next";

const TopBar = ({ height }) => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const toggleLangage = () => {
    if (config.lang === "en") {
      dispatch({ type: "SET_LANG", payload: "fr" });
    } else {
      dispatch({ type: "SET_LANG", payload: "en" });
    }
  };
  const toggleTheme = () => {
    if (config.theme === "light") {
      dispatch({ type: "SET_THEME", payload: "dark" });
    } else {
      dispatch({ type: "SET_THEME", payload: "light" });
    }
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

  return (
    <div
      style={height ? { height } : {}}
      className={`flex align-center justify-between dark:bg-${config.primaryColor}-800 bg-${config.primaryColor}-50`}
    >
      <div className="flex gap-2 px-3 align-center">
        <div>logo</div>
      </div>
      {JSON.stringify(config)}

      <div className="flex gap-2 px-3">
        <button className="p-2" onClick={toggleTheme}>
          {config.theme}
        </button>
        <button className="p-2" onClick={toggleLangage}>
          {config.lang}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
