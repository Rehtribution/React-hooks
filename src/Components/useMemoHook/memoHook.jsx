import React, { useState, memo } from "react";
import "./memoHook.css";

// import State from "../useStateHook/stateHook.jsx";

function Sample({ currentState }) {


    const color = currentState % 2 === 0 ? 'red' : 'green';

    return (
        <div style={{ backgroundColor: color }}>            
            This is rendering
        </div>
    )
}

// function Memo() {
//     const [renderIndex, setRenderIndex] = currentState
// }

export default Sample;
