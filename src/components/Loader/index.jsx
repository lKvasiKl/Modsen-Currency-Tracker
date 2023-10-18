import React from "react";

import { LoaderContainer } from "./styled";

const LOADER_ELEMENTS = Array.from({ length: 7 }, (_, index) => (
  <div key={index}></div>
));

const Loader = React.memo(() => {
  return (
    <LoaderContainer>
      <div className="loader">{LOADER_ELEMENTS}</div>
    </LoaderContainer>
  );
});

export default Loader;
