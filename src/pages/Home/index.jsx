import { Navbar, Header, Footer, UpdateInfo } from "@components";

import CurrentRate from "./components/CurrentRate";
import CurrencyConvertorModal from "./components/CurrencyConvertorModal";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <UpdateInfo />
      <CurrencyConvertorModal />
      <CurrentRate />
      <Footer />
    </>
  );
};

export default Home;
