/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import routes from "../../routes";
import styled from "styled-components";

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;

  .link {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 0.5rem;
  }
  img {
    width: 1em;
    height: 1em;
  }
`;

const SideNav = (props) => {
  const config = useSelector((state) => state.config);
  const width = props.width || "10rem";
  const top = props.top || "3rem";
  const { t } = useTranslation();

  const RoutLink = ({ route }) => {
    return (
      <React.Fragment>
        {(route.index && (
          <Link
            to={route.index}
            className={`slide-up link p-2 text-center text-${config.primaryColor}-800 dark:text-${config.primaryColor}-200 hover:bg-${config.primaryColor}-200 hover:text-${config.primaryColor}-600`}
          >
            {/* <img src={route.icon} alt="" /> */}
            <img src={route.icon} alt="" />
            <div>{t(route.name)}</div>
          </Link>
        )) || (
          <div
            toggle="collapse"
            target={`.${route.name}`}
            className={`slide-up link p-2 text-center text-${config.primaryColor}-500 dark:text-${config.primaryColor}-200 hover:bg-${config.primaryColor}-200 hover:text-${config.primaryColor}-600`}
          >
            <img src={route.icon} alt="" />
            <div>{t(route.name)}</div>
          </div>
        )}
        {route.routes &&
          route.routes.map((child, index) => {
            return (
              <div key={index} className={` ${route.name}`}>
                <RoutLink route={child} />
              </div>
            );
          })}
      </React.Fragment>
    );
  };

  return (
    <SideNavContainer
      style={{ width, height: `calc(100vh - ${top})` }}
      className={`dark:bg-${config.primaryColor}-800 bg-${config.primaryColor}-50 `}
    >
      {routes.map((route, index) => {
        return (
          <div key={index}>
            <RoutLink route={route} />
          </div>
        );
      })}
    </SideNavContainer>
  );
};

export default SideNav;
