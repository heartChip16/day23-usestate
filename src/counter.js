import React, { useState } from 'react'

function Counter() {
    const [count, setcount] = useState(0);
    const [text, setText] = useState("initial");

    const handleClick = () => {
        // setcount(count + 1);
        // setcount(count + 1);
        // setcount(count + 1);
        // setcount(count + 1);
        //updater function syntax
        // setcount((prevCount) => prevCount + 1);
        // setcount((prevCount) => prevCount + 1);
        // setcount((prevCount) => prevCount + 1);
        // setcount((prevCount) => prevCount + 1);

        setcount(count + 1);
        setText(`${text}  ${count}`);
    }
    return (
        <div>
            <button onClick={handleClick}>Count+Text</button>
            <div>{count} {text}</div>
        </div>
    )
}

export default Counter
