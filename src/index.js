import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DarkContextProvider } from "./Context/DarkContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <DarkContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkContextProvider>
  </React.StrictMode>
);

/*
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkContextProvider } from "./Context/DarkContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkContextProvider>
  </React.StrictMode>
);
*/
