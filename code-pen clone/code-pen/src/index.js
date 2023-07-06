import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";
import Header from "./Components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
//React.Strictmode forces to render twice which might be a problem
