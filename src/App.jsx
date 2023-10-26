import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Events from "./components/Events";
import State1 from "./components/useState";
import TextInputWithFocusButton from "./components/useRef";
import Fruits from "./components/LiftigState/Fruits";
import FruitsCounter from "./components/LiftigState/FruitsCounter";

function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
    { fruitName: "plum", id: 4 },
    { fruitName: "plum", id: 5 }
  ]);

  return (
    <>
      {/* <Header name="John" />
      <Header name="Ahmad" />
      <Header name="Khaled" /> */}
      {/* <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} /> */}

      <Events />
      <State1 />
      <TextInputWithFocusButton />

      <div className="App">
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
    </>
  );
}

export default App;
