import { useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  function handleClick() { 
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <>
      <div>
        <h1>{darkMode? 'It is dark mode': 'It is light mode'}</h1>
        <button onClick={toggleDarkMode}>
            Toggle
        </button>
      </div>
    </>
  );
}

export default DarkMode
