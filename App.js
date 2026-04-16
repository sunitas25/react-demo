import React from "react";
import { createRoot } from 'react-dom/client';

const h1 = React.createElement("h1", {id: "heading"}, "Hello World from React!");
const root = createRoot(document.getElementById("root"));
root.render(h1);