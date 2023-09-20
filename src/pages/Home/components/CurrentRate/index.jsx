import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import usd from "@assets/icons/dollar.svg";
import getCurriencies from "@services/currencyService";
import { getCache, saveCache, isCacheValid } from "@utils/cachingFunctions";

import CardsSection from "../CardsSection";
import {
  STOCKS_CARD_DATA,
  QUOTES_CARD_DATA,
} from "../../constants/currencyCard";
import CurrencyConvertorModal from "../CurrencyConvertorModal";

import { Main, OverflowHidden } from "./styled";

const CACHE_LIFETIME = Number(process.env.REACT_APP_CACHE_LIFETIME);
const CACHE_CURRENCY_RATES_KEY = process.env.REACT_APP_CACHE_CURRENCY_RATES_KEY;
const CACHE_LAST_UPDATE_KEY = process.env.REACT_APP_CACHE_LAST_UPDATE_KEY;

const CurrentRate = () => {
  const [rates, setRates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetCurrency, setTargetCurrency] = useState({
    id: "USD",
    imgPath: usd,
  });

  const handleCardClick = ({ id, imgPath }) => {
    setIsModalOpen((prevSatate) => !prevSatate);
    setTargetCurrency({
      id,
      imgPath,
    });
  };

  useEffect(() => {
    const getRatesValue = async () => {
      const currentTime = new Date().getTime();
      const currencies = QUOTES_CARD_DATA.map((quote) => quote.id);
      const response = await getCurriencies(currencies);

      setRates(response);

      saveCache(CACHE_LAST_UPDATE_KEY, currentTime);
      saveCache(CACHE_CURRENCY_RATES_KEY, {
        expirationDate: currentTime + CACHE_LIFETIME,
        data: response,
      });
    };

    const cachedRates = getCache(CACHE_CURRENCY_RATES_KEY);

    if (isCacheValid(cachedRates)) {
      setRates(cachedRates);
    } else {
      getRatesValue();
    }
  }, []);

  return (
    <Main>
      <CardsSection cardsArray={STOCKS_CARD_DATA} title="Stocks" />
      <CardsSection
        cardsArray={QUOTES_CARD_DATA}
        rates={rates}
        title="Quotes"
        onClick={handleCardClick}
      />
      {isModalOpen &&
        createPortal(
          <CurrencyConvertorModal
            setIsModalOpen={setIsModalOpen}
            targetCurrency={targetCurrency}
          />,
          document.getElementById("root"),
        )}
      {isModalOpen && <OverflowHidden />}
    </Main>
  );
};

export default CurrentRate;
