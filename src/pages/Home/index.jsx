import { Navbar, Header, Footer, UpdateInfo } from "@components";

import CurrentRate from "./components/CurrentRate";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <UpdateInfo />
      <CurrentRate />
      <Footer />
    </>
  );
};

export default Home;
