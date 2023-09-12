import React from "react";
import { Global } from "./styled";
import Home from "@pages/Home";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Global />
      <Home />
    </BrowserRouter>
  );
};

export default App;
