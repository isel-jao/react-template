/* eslint-disable no-unused-vars */
import { Routes, Route, Link } from "react-router-dom";
const Home = () => <div> Home </div>;
const About = () => <div> About </div>;

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const Nav = () => {
  return (
    <div className="w-full flex jutify-center gap-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App ">
      <div className="h-screen  dark:bg-sky-700 dark:text-slate-200 bg-slate-100 text-slate-800">
        <Nav />
        <RouterView />
      </div>
    </div>
  );
}

export default App;
