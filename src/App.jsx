/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation, Trans } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";
import routes from "./routes";
import SideNav from "./components/side-nav";
import TopBar from "./components/top-bar";
import NotFound from "./components/not-found";
import { flattenDeep } from "lodash";
const recPath = (path, parent) => {
  const index = parent ? parent + path.index : path.index;
  if (!path.routes) return parent ? { ...path, index } : path;
  const routes = [];
  return path.routes.map((r) => recPath(r, index));
};

const getFlattenRoutes = (routes) => {
  return flattenDeep(routes.map((r) => recPath(r)));
};

const flattenRoutes = getFlattenRoutes(routes);

const RouterView = () => {
  const linkClass = "outline-cyan-500";

  return (
    <Routes>
      {flattenRoutes.map((route, index) => {
        return <Route key={index} path={route.index} element={route.element} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const MainLayout = ({ config }) => {
  return (
    <div
      className={`dark:bg-${config.primaryColor}-900 dark:text-${config.primaryColor}-200 bg-${config.primaryColor}-100 text-${config.primaryColor}-800 `}
    >
      <TopBar className="shadow-sm" height="3rem" />
      <div className="flex">
        <SideNav className="shadow-sm px-3 " width="15rem" />
        <div className="flex w-full justify-center align-center">
          <RouterView />
        </div>
      </div>
    </div>
  );
};

function App() {
  const config = useSelector((state) => state.config);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        dispatch({ type: "SET_LAYOUT", payload: "mobile" });
      } else if (window.innerWidth < 1024) {
        dispatch({ type: "SET_LAYOUT", payload: "tablete" });
      } else {
        dispatch({ type: "SET_LAYOUT", payload: "desktop" });
      }
    });
  }, []);
  return (
    <div className={`App ${config.theme} `}>
      <MainLayout config={config} />
    </div>
  );
}

export default App;
