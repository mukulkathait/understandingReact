import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <>
      <h1>Custom MyApp function</h1>
    </>
  );
}

const someVariable = "I'm used for example";

const anotherElement = (
  <a href="https://google.com/" target="_blank">
    Vist Google
  </a>
);

const customElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to vist Google",
  someVariable
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <App /> //Case 1
  // <MyApp /> //Case 2
  // anotherElement //Case 3
  customElement
);
