import React from "react";
import { createRoot } from 'react-dom/client';

const Title = () => (<h1 className="head">This is the page title</h1>)

const HeadingComponent = () => (
    <div>
        <Title />
        <Title></Title>
        {Title()}
        <h1>This is the heading component</h1>
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);