import React from 'react';
import  ReactDOM from 'react-dom/client';
import './style.css';

// How to check the React version and Print on the Web page
const version = React.version;
const root = ReactDOM.createRoot(document.getElementById("version"));
root.render(<h1 align="center">React version is : {version}</h1>);

// How to apply inline Css in React
const fullname = "Bhavika Sagar Vasani";
const style = ReactDOM.createRoot(document.getElementById("inline_style"));
style.render(<h1 align="center" style={{color:"red",fontFamily:"cursive",fontSize:"35px"}}>This Is Inline Css and Print Full Name  <br /> {fullname} </h1>);

//How to Add External Css in React you can add the external css in src folder.
//import the css file Example above line 3 for external css used in this file.
//Function return only single value
//we can add the multiple html elements use <React.Fragment> or <></>.
