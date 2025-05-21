// Creating the below using React.createElement

{
  /* <div id="parent">
  <div id="child">
    <h1 id="heading">Hi this is a headig</h1>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1-tag1" }, "This is a heading 1"),
    React.createElement("h2", { id: "h1-tag2" }, "This is a heading 2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "h1-tag1" }, "This is a heading 1"),
    React.createElement("h2", { id: "h1-tag2" }, "This is a heading 2"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
