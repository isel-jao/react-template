import Home from "./pages/home";
import About from "./pages/about";
import Component from "./pages/component";
import HomeIcon from "./assets/icons/Solid/General/Home.svg";
import aboutIcon from "./assets/icons/Solid/Devices/Binocular.svg";
import componentIcon from "./assets/icons/Solid/Interface/Apps.svg";
import Settings from "./pages/settings";
import settingsIcon from "./assets/icons/Solid/Interface/Settings-alt.svg";
const routes = [
  {
    name: "home",
    index: "/",
    element: <Home />,
    icon: HomeIcon,
  },
  {
    name: "about",
    index: "/about",
    element: <About />,
    icon: aboutIcon,
  },

  {
    index: "/component",
    element: <Component />,
    name: "component",
    icon: componentIcon,
  },
  {
    index: "/nested",
    element: <Settings />,
    name: "nested",
    icon: settingsIcon,
    routes: [
      {
        index: "/component",
        element: <Component />,
        name: "component",
        routes: [
          {
            index: "/component",
            element: <Component />,
            name: "component",
            icon: componentIcon,
          },
          {
            index: "/settings",
            element: <Settings />,
            name: "settings",
            icon: settingsIcon,
          },
        ],
        icon: componentIcon,
      },
      {
        index: "/settings",
        element: <Settings />,
        name: "settings",
        icon: settingsIcon,
      },
    ],
  },
  {
    index: "/settings",
    element: <Settings />,
    name: "settings",
    icon: settingsIcon,
  },
];

export default routes;
