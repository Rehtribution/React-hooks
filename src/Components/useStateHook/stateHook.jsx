import React, { useState } from "react";
// import useState from react
import "./stateHook.css";

// demonstrating the use of the stateHook with a simple counter.
// Starting the counter at 10.  We will call this function later to set the initial state.
function startCount() {
    console.log('startCount has been run! Calling the funciton in this way will only run the function on the initial render.');
    return 10
}

// This is our simple counter function. It will add and subtract by 1 from the state value.
function State() {
    // first value in the array is the current state and the secont is the function to alter the current state.
    const [currentState, alterState] = useState(() => startCount()) 
        // We are calling the startCount function in the useState to set the initial state.

    function decrementState() {
        alterState(prevState => prevState - 1)
    }
    // here the use of prevState allows the previous value to be passed into the function to decrement by 1. The next function works the same way to increment by 1.
        function incrementState() {
        alterState(prevState => prevState + 1)
    }


    return (
        <>
        <button onClick={decrementState}>-</button>
        <span>{currentState}</span>
        <button onClick={incrementState}>+</button>
        </>
    )


}
export default State;