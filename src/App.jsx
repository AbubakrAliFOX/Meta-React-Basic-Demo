import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

// import Header from "./components/Header";
import Cards from "./components/Cards";
import Events from "./components/Events";
import State1 from "./components/useState";
import TextInputWithFocusButton from "./components/useRef";
// import Fruits from "./components/LiftigState/Fruits";
// import FruitsCounter from "./components/LiftigState/FruitsCounter";
import logo from './assets/logo.png'
import MyVideo from './components/Videos'

function App() {
  return (
    <>
      {/* <Header name="John" />
      <Header name="Ahmad" />
      <Header name="Khaled" /> */}
      {/* <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} /> */}
      <nav className="navbar">
        <Link to="/cards" className="nav-item">
          Cards
        </Link>
        <Link to="/events" className="nav-item">
          Events
        </Link>
        <Link to="/state1" className="nav-item">
          State
        </Link>
        <Link to="/ref" className="nav-item">
          Ref
        </Link>
        <Link to="/image" className="nav-item">
          Image
        </Link>
        <Link to="/video" className="nav-item">
          Video
        </Link>
      </nav>

      <Routes>
        <Route
          path="/cards"
          element={
            <Cards num={5} />
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/ref" element={<TextInputWithFocusButton />} />
        <Route path="/image" element={<img width={500} src={logo} />} />
        <Route path="/video" element={<MyVideo controls={true} />} />
      </Routes>
    </>
  );
}

export default App;
