import React, { useState, useEffect } from "react";
import "./effectHook.css";

// demonstrating the use of the effectHook with a simple API query.
// This demo version is using JSONPlaceholder API.
function Effect() {
    //Here we are starting our state at posts.
    const [resourceType, setType] = useState('posts')
    const [items, setItems] = useState()

    useEffect(() => {
        // We are adding the ${resourceType} to tag the end of the url with the active resourceType. It is important to ensure it is wrapped in ` and not '.
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setItems(json));
    }, [resourceType])

    return (
        <>
            <div className="effectQuery">
                <button onClick={() => setType('posts')}>Posts</button>
                <button onClick={() => setType('albums')}>Albums</button>
                <button onClick={() => setType('photos')}>Photos</button>
            </div>
            <h1>{resourceType}</h1>
            {items?.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )


}
export default Effect;