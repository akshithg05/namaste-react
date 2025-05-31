import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "first-h1", key: "child1" }, [
    React.createElement("h1", { id: "h1tag", key: "child1-1" }, "This is a h1"),
    React.createElement("h2", { id: "h2tag", key: "child1-2" }, "This is a h2"),
  ]),
  React.createElement("div", { id: "first-h1", key: "child2" }, [
    React.createElement("h1", { id: "h1tag", key: "child2-1" }, "This is a h1"),
    React.createElement("h2", { id: "h2tag", key: "child2-2" }, "This is a h2"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
