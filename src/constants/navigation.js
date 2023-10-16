import { lazy } from "react";
import { ROUTES } from "@constants/routes";

const Home = lazy(() => import("@pages/Home"));
const Contato = lazy(() => import("@pages/Contato"));
const Timeline = lazy(() => import("@pages/Timeline"));
const BankCard = lazy(() => import("@pages/BankCard"));

export const NAVBAR_ITEMS = {
  Home: {
    path: ROUTES.home,
    element: <Home />,
  },
  Timeline: {
    path: ROUTES.timeline,
    element: <Timeline />,
  },
  BankCard: {
    path: ROUTES.bankCard,
    element: <BankCard />,
  },
  Contato: {
    path: ROUTES.contato,
    element: <Contato />,
  },
};
