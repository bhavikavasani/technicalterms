import React from 'react';
import ReactDOM  from 'react-dom/client';
import './style.css';

// hello world print by function

// function App()
// {
//   return <h1>Hello world</h1>
// }
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(<App />);

// const name="hello world";
// const name1="Hello bhavika";
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(
// // function return single values  
// // multiple values so used fragements <></>
// <React.Fragment>
// <h1>Hi my name is : {name}</h1>
// <p>My name is {name1}</p>
// </React.Fragment>
// );

// const name="Bhavika";
// const img="https://static.thenounproject.com/png/1095514-200.png";
// function App()
// {
//   return (
//   <> 
//   <div className='my-app'>
//   <h1>My name is {name}</h1>
//   <img src={img} alt='img01' title='hi bhavika' />
//   </div>
//   </>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById("demo-app"));
// root.render(<App />);

const version=React.version;
const root=ReactDOM.createRoot(document.getElementById("demo-app"));
root.render(<h1 align="center" style={{color:"red",fontSize:"65px",fontFamily:"cursive"}}>React version is {version}</h1>);




