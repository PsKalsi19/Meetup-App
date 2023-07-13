import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/DataProvider.jsx";
import Popover from "./components/Popover.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Popover/>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
