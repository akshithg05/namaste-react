import React from "react";
import { createRoot } from "react-dom/client";

// 1. Creating element using React.createElement()
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading1", key: "h1" }, "This is a h1"),
  React.createElement("h2", { id: "heading2", key: "h2" }, "This is a h2"),
  React.createElement("h3", { id: "heading3", key: "h3" }, "This is a h3"),
]);

// 2. Creating the same using JSX.
const parentJSX = (
  <div id="parentJsx">
    <h1 id="head-1">This is a h1</h1>
    <h2 id="head-2">This is a h2</h2>
    <h3 id="head-3">This is a h3</h3>
  </div>
);

// 3. Create functional component of the same

const Title = () => {
  return <h1>This is the Title</h1>;
};

// 4. Component composition - passing components into other components.
const FunctionalComponent = ({ id }) => (
  <div id={id}>
    <Title />
    <h1 id="head-1">This is a h1</h1>
    <h2 id="head-2">This is a h2</h2>
    <h3 id="head-3">This is a h3</h3>
  </div>
);

// 5. Header and style with css
const Header = () => (
  <div id="header" className="header">
    <img src="./public/images/real-madrid-logo.png" alt="Real Madrid Logo" />
    <h1>This is the header</h1>
    <input placeholder="Enter text" value={hi} />
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    {parent}
    {parentJSX}
    {/*Different ways of rendering a React functional component */}
    {FunctionalComponent({ id: 1 })}
    <FunctionalComponent id={2} />
    <FunctionalComponent id={3}></FunctionalComponent>
  </>
);
