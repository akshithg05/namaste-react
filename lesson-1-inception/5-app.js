const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
console.log(heading);
console.log("type:", heading.type);
console.log("$$typeof:", heading.$$typeof);
console.log("typeof(heading):", typeof heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
