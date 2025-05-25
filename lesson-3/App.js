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

// JSX
const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello world from JSX
  </h1>
);

// console.log(heading);
console.log(jsxHeading);

const root = createRoot(document.getElementById("root"));

root.render(jsxHeading);
