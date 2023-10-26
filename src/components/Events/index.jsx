import { useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
