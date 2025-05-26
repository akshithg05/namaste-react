import React from "react";
import { createRoot } from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "c1" }, [
//     React.createElement("h1", { id: "head1-1", key: "c1-1" }, "This is a h1 tag"),
//     React.createElement("h2", { id: "head1-2", key: "c1-2" }, "This is a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "c2" }, [
//     React.createElement("h1", { id: "head2-1", key: "c2-1" }, "This is a h1 tag"),
//     React.createElement("h2", { id: "head2-2", key: "c2-2" }, "This is a h2 tag"),
//   ]),
// ]);

// const heading = React.createElement("h1", { id: "heading" }, "This is the heading");

// JSX - returns a react element only.

// This is a react element
const title = (
  <h1 id="heading" className="heading">
    Hello world from JSX
  </h1>
);

const number = 1000;
// React functional component - 3 ways of writing it

// 1) full explicit way of writing with function.
function HeadingComponent() {
  return (
    <div>
      <h1 className="heading">Heading with React Functional Component 1</h1>
      <h2>{number}</h2>
      {title}
    </div>
  );
}

// 2) With arrow function
const HeadingComponent2 = () => {
  return (
    <div>
      <h1 className="heading">Heading with React Functional Component 2</h1>
    </div>
  );
};

// 3) With arrow function and no return
const HeadingComponent3 = () => (
  <div>
    <h1 className="heading" id="heading3">
      Heading with React Functional Component 3
    </h1>
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(
  // Component composition - merging many components into 1
  <div id="parent">
    <HeadingComponent />
    <HeadingComponent2 />
    <HeadingComponent3 />
  </div>
);
