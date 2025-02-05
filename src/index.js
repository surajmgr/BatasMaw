import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import App from "./App";
import { Layout } from "./Global/Context/Layout";
import { HashRouter } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill"; // Import the polyfill

smoothscroll.polyfill();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <HashRouter>
        <App />
      </HashRouter>
    </Layout>
  </React.StrictMode>,
);
