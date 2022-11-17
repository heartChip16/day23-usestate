import React, { useState, useEffect } from 'react'

function UseEffectDemo() {
    console.log("re-render");
    const [cursorPosition, setcursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (event) => {
            setcursorPosition({ x: event.clientX, y: event.clientY });
            console.log("mouse pointer moved.");
        }
        window.addEventListener("pointermove", handleMove);
        return () => { window.removeEventListener("pointermove", handleMove); }
    });

    return (
        <div> x : {cursorPosition.x}, y : {cursorPosition.y}</div>
    )
}


// function UseEffectDemo() {
//     console.log("re-render");
//     const [cursorPosition, setcursorPosition] = useState({ x: 0, y: 0 });

//     window.addEventListener("pointermove", (event) => {
//         setcursorPosition({ x: event.clientX, y: event.clientY });
//         console.log("mouse pointer moved.");
//     });

//     return (
//         <div>
//             x : {cursorPosition.x}, y : {cursorPosition.y}
//         </div>
//     )
// }

export default UseEffectDemo
