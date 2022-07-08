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

  const RoutLink = ({ route, parent, ...props }) => {
    const index = parent ? parent + route.index : route.index;
    return (
      <React.Fragment>
        {(route.routes && (
          <div>
            <div
              toggle="collapse"
              target={`#${route.name}`}
              className={`slide-up link p-2 text-center text-${config.primaryColor}-800 dark:text-${config.primaryColor}-200 hover:bg-${config.primaryColor}-200 hover:text-${config.primaryColor}-600`}
            >
              {/* <img src={route.icon} alt="" /> */}
              <img src={route.icon} alt="" />
              <div>{t(route.name)}</div>
            </div>
            <div className="pl-3" id={route.name}>
              {route.routes.map((r) => (
                <RoutLink key={r.name} route={r} parent={index} />
              ))}
            </div>
          </div>
        )) || (
          <Link
            to={parent ? parent + route.index : route.index}
            className={`slide-up link p-2 text-center text-${config.primaryColor}-800 dark:text-${config.primaryColor}-200 hover:bg-${config.primaryColor}-200 hover:text-${config.primaryColor}-600`}
          >
            {/* <img src={route.icon} alt="" /> */}
            <img src={route.icon} alt="" />
            <div>{t(route.name)}</div>
          </Link>
        )}
      </React.Fragment>
    );
  };

  return (
    <SideNavContainer
      style={{ width, height: `calc(100vh - ${top})` }}
      className={`dark:bg-${config.primaryColor}-800 bg-${config.primaryColor}-50 ${props.className}`}
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
