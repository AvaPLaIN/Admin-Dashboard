import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./App.styles";
import ThemeProvider from "./providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
