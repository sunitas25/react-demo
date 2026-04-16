import React from "react";
import { createRoot } from 'react-dom/client';

const HeadingComponent = () => (
    <div>
        <h1>This is the functional component</h1>
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);