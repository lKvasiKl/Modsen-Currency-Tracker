import Home from "@pages/Home";
import { BrowserRouter } from "react-router-dom";

import { Global } from "./styled";

const App = () => {
  return (
    <BrowserRouter>
      <Global />
      <Home />
    </BrowserRouter>
  );
};

export default App;
