import React from "react";
import { useSelector } from "react-redux";

const Card = ({ children }) => {
  const config = useSelector((state) => state.config);
  return (
    <div
      className={`shadow-light card dark:bg-${config.primaryColor}-800 dark:text-${config.primaryColor}-200`}
    >
      {children}
    </div>
  );
};

export default Card;
