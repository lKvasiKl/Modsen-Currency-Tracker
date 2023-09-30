import { lazy } from "react";

const Home = lazy(() => import("@pages/Home"));
const Contato = lazy(() => import("@pages/Contato"));
const Timeline = lazy(() => import("@pages/Timeline"));
const BankCard = lazy(() => import("@pages/BankCard"));

export const NAVBAR_ITEMS = {
  Home: {
    path: "/",
    element: <Home />,
  },
  Timeline: {
    path: "/timeline",
    element: <Timeline />,
  },
  "Bank card": {
    path: "/bank-card",
    element: <BankCard />,
  },
  Contato: {
    path: "/contato",
    element: <Contato />,
  },
};
