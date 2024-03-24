const parent =React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "Inner child!"), React.createElement("h2", {}, "sibling Inner child!")]));
const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!"); 
//console.log(heading); //return object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);//render will take object and return the h1 tag
root.render(parent);