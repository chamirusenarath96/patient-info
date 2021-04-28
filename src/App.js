import './App.css';
import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import Main from "./Main"

function App() {

  return (
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <div>
            <Main />
          </div>
        </ThemeProvider>
      </CssBaseline>

    </BrowserRouter>
  );
}

export default App;
