import Home from "./pages/home";
import About from "./pages/about";
import Test from "./pages/test";
import HomeIcon from "./assets/icons/Solid/General/Home.svg";
import aboutIcon from "./assets/icons/Solid/Devices/Binocular.svg";
import Settings from "./pages/settings";
import settingsIcon from "./assets/icons/Solid/Interface/Settings-alt.svg";
import testIcon from "./assets/icons/Solid/Status/Fire.svg";
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
    index: "/test",
    element: <Test />,
    name: "test",
    icon: testIcon,
  },
  {
    index: "/settings",
    element: <Settings />,
    name: "settings",
    icon: settingsIcon,
  },
];

export default routes;
