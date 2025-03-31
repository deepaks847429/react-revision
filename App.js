import React from 'react';
import ReactDOM from 'react-dom/client';

const heading= React.createElement("h1", {id:"heading"}, "Hello World from React!");
console.log(heading);

// JSX - Not html in js, HTML- LIKE syntax
const jsxheading1=  <h1 id="heading1"> Deepak is learning React</h1>
console.log(jsxheading1);

// React component
// class based component, functional component
const Title=()=>{
  return <h1> Namaste react functional component 1</h1>;
}
// component composition
const HeadingCopmponent=()=>{
  return  (<div> 
    <Title/>
    {100+200}
    <h1> Namaste react functional component</h1> </div>)}; 
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCopmponent />);