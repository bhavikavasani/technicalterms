import React from 'react';
import ReactDOM from 'react-dom/client';

//Single value printing 
const name="Bhavika vasani"
const root = ReactDOM.createRoot(document.getElementById('fragment'));
root.render(<h1>{name}</h1>);

// Multiple value printing using html elements we can use react fragment
// How to following code for fragment

root.render(
  <>
    <h1>{name}</h1>
    <h1>My Education is MCA</h1>
</>
);