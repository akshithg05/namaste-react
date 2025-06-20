// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// const root = document.getElementById("root");
// root.appendChild(heading);

console.log("React:- ", window.React);
console.log("ReactDOM:- ", window.ReactDOM);

// This is creating a single element
const heading = React.createElement("h1", { key: "heading" }, "Hello world");

const element = React.createElement("div", { key: "parent" }, [
  React.createElement("div", { key: "child1" }, [
    React.createElement("h1", { key: "heading11" }, "This is the first-first heading"),
    React.createElement("h2", { key: "heading12" }, "This is the first-second heading"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", { key: "heading21" }, "This is the second-first heading"),
    React.createElement("h2", { key: "heading22" }, "This is the second-second heading"),
  ]),
]);
console.log("A React element:- ", heading);
console.log("Type of React.element is", typeof heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
