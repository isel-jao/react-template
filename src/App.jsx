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
const View = (props) => {
  const parent = props.parent || "";
};

const myRoutes = routes.filter((route) => route.index);

const RouterView = () => {
  const linkClass = "outline-cyan-500";
  return (
    <Routes>
      {myRoutes.map((route, index) => {
        return <Route key={index} path={route.index} element={route.element} />;
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
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
    <div className={`App ${config.theme}`}>
      <div
        className={`h-screen  dark:bg-${config.primaryColor}-900 dark:text-${config.primaryColor}-200 bg-${config.primaryColor}-100 text-${config.primaryColor}-800`}
      >
        <TopBar height="3rem" />
        <div className="flex">
          <SideNav width="10rem" />
          <div className="flex w-full justify-center align-center  text-dark">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
