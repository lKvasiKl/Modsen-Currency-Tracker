import { lazy } from "react";
import { URLS } from "@constants/routesURL";

const Home = lazy(() => import("@pages/Home"));
const Contato = lazy(() => import("@pages/Contato"));
const Timeline = lazy(() => import("@pages/Timeline"));
const BankCard = lazy(() => import("@pages/BankCard"));

export const NAVBAR_ITEMS = {
  Home: {
    path: URLS.home,
    element: <Home />,
  },
  Timeline: {
    path: URLS.timeline,
    element: <Timeline />,
  },
  BankCard: {
    path: URLS.bankCard,
    element: <BankCard />,
  },
  Contato: {
    path: URLS.contato,
    element: <Contato />,
  },
};
