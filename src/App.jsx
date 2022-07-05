/* eslint-disable no-unused-vars */
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => <div> Home </div>;
const About = () => <div> About </div>;
const Component = () => <div>component</div>;
const NotFound = () => <div>404</div>;

const RouterView = () => {
  const linkClass = "outline-cyan-500";
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/component" element={<Component />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const Nav = () => {
  return (
    <div className="w-full flex jutify-center ">
      <Link className="px-3 py-2 text-cyan-500" to="/">
        Home
      </Link>
      <Link className="px-3 py-2 text-cyan-500" to="/about">
        About
      </Link>
      <Link className="px-3 py-2 text-cyan-500" to="/component">
        Compoenent
      </Link>
    </div>
  );
};

function App() {
  const config = useSelector((state) => state.config);
  return (
    <div className={`App ${config.theme}`}>
      <div className="h-screen  dark:bg-slate-800 dark:text-slate-200 bg-slate-100 text-slate-800">
        <Nav />
        <RouterView />
      </div>
    </div>
  );
}

export default App;
