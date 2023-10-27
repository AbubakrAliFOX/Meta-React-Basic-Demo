import { useState, useRef } from "react";

export default function Calc() {
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum(parseInt(sum) + parseInt(input));
    setInput("");
  };

  return (
    <>
      <h1>Calculator App</h1>
      {sum ? <h5>{sum}</h5> : null}
      {/* <h5>{input}</h5> */}
      <input value={input} onChange={handleChange} type="text" />
      <button onClick={add}>Add</button>
      {/* <button onClick={subtract}>Subtract</button> */}
      {/* <button onClick={multiply}>Multiply</button> */}
      {/* <button onClick={divide}>Divide</button> */}
      <button onClick={() => setInput("")}>Reset Input</button>
      <button onClick={() => setSum(null)}>Reset Sum</button>
    </>
  );
}
