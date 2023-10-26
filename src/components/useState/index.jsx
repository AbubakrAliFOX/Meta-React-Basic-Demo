import { useState } from "react";

export default function InputComponent () {
    const [text, setText] = useState('Hello');
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    return (
        <>
            <div>
                <h1>{text}</h1>
                <input onChange={handleChange} value={text} type="text" />
                <button onClick={() => setText('Hello')}>Reset</button>
            </div>
        </>
    )
}