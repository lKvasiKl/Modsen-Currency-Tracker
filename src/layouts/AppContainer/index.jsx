import { Outlet } from "react-router-dom";

import { Navbar, Header, Footer, UpdateInfo } from "@components";
import { Global } from "@styled";

const AppContainer = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
      <UpdateInfo />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppContainer;
