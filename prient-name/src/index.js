import React from 'react';
import  ReactDOM  from 'react-dom/client';


const displayname = "Bhavika";
function Printname()
{
    return (
        <>
    <h1>My name is {displayname}</h1>
                <h3>My Education is MCA</h3>
                <p style={{color:"red",fontFamily:"cursive",fontSize:"25px"}}>Hello I'm Front-end devloper</p>
                </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("first-demo"));
root.render(<Printname />);
