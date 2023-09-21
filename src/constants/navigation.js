import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const Contato = lazy(() => import("@pages/Contato"));

export const NAVBAR_ITEMS = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Timeline: {
    path: "/timeline",
  },
  "Bank card": {
    path: "/bank-card",
  },
  Contato: {
    path: "/contato",
    element: <Contato />,
  },
};
