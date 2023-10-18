import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { DEFAULT_ID } from "./config";

function usePortal(id = DEFAULT_ID) {
  const portalContainerRef = useRef(null);

  useEffect(() => {
    let element = document.getElementById(id);
    let elementCreated = false;

    if (!element) {
      elementCreated = true;
      element = document.createElement("div");
      element.id = id;
      document.body.appendChild(element);
    }

    portalContainerRef.current = element;

    return () => {
      if (elementCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  const createPortal = (element) => {
    return ReactDOM.createPortal(element, portalContainerRef.current);
  };

  return createPortal;
}

export default usePortal;
