/*

<div id="parent">
<div id="child">
  <h1>hello world from react</h1>
</div>
</div>
*/

const parent=React.createElement("div", {id:parent},  React.createElement("div", {id: "child"}, React.createElement("h1", {}, "hello world from react")));

const parent1=React.createElement("div", {id:parent}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "hello world from react")));


const heading=React.createElement(
  "h1",
  {id: "heading"},
  "hello world from react"
);
console.log(parent1); // return object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1); 