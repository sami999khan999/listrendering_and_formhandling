// // List Rendering

// // List rendering in React involves displaying a collection of items as a list in your user interface. You can render lists in React using a variety of techniques, depending on the structure of your data and how you want to display it. //

//============================================================================================================================================//

// // more details in ./Component/ListRendering.ja and ./Component/ListRenderingChild.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Controlled Form

// // In React, a controlled form is a form element (like an input field, textarea, or select) whose value is controlled by the state of a React component. Controlled forms are a common pattern in React applications because they provide a way to manage and manipulate user input in a controlled and predictable manner. //

//============================================================================================================================================//

// // More details in ./component/Form.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
