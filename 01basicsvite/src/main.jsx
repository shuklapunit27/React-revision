import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reeactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    style: {
      color: "yellow",
      textDecoration: "none",
      fontSize: "20px",
    },
    className: "custom-link",
  },
  children: "Click me to visit Google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react</h1>
    </div>
  );
}
// function AnotherElement() {
//   return (
//     <a href="https://google.com" target="_blank">
//       Visit Google
//     </a>
//   );
// }

// const AnotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

const aReactElement = React.createElement(
  "a",
  { href: "https::/google.com", target: "_blank" },
  "Click to visit Google"
);
createRoot(document.getElementById("root")).render(App());
