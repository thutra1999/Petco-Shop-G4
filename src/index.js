import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./stores";
import { Provider } from "react-redux";

import { AuthContextProvider } from "./usecontact/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        
  <AuthContextProvider>
            <Provider store={store}>
              <App />
            </Provider></AuthContextProvider>
        
);

reportWebVitals();
