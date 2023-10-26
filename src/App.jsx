import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Events from "./components/Events";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header name="John" />
      <Header name="Ahmad" />
      <Header name="Khaled" /> */}
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Card h2={"Hello, This is an H2"} h3={"Hello, This is an H3"} />
      <Events />
    </>
  );
}

export default App;
