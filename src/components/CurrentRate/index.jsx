import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { OverflowHidden } from "@styled";
import getCurriencies from "@services/currencyService";
import { getCache, saveCache, isCacheValid } from "@utils/cachingFunctions";
import {
  STOCKS_CARD_DATA,
  QUOTES_CARD_DATA,
  CURRENCY_DEFAULT,
} from "@constants/currency";
import CardsSection from "./CardsSection";
import CurrencyConvertorModal from "./CurrencyConvertorModal";

import { Main } from "./styled";

const CurrentRate = () => {
  const [rates, setRates] = useState({
    expirationDate: new Date().getTime() + ENV_VARIABLES.cacheLifetime,
    data: {},
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState(CURRENCY_DEFAULT);

  const handleCardClick = ({ id, imgPath }) => {
    if (Object.keys(rates.data).length === 0) {
      return;
    }

    setIsModalOpen((prevSatate) => !prevSatate);
    setExchangeAmount(rates.data[id].value);
    setTargetCurrency({
      id,
      imgPath,
    });
  };

  const getRatesValue = async () => {
    const currentTime = new Date().getTime();
    const currencies = QUOTES_CARD_DATA.map((quote) => quote.id);
    const response = await getCurriencies(currencies);

    setRates({
      expirationDate: currentTime + ENV_VARIABLES.cacheLifetime,
      data: response,
    });

    saveCache(ENV_VARIABLES.cacheLastUpdateKey, currentTime);
    saveCache(ENV_VARIABLES.cacheCurrencyRatesKey, {
      expirationDate: currentTime + ENV_VARIABLES.cacheLifetime,
      data: response,
    });
  };

  useEffect(() => {
    const cachedRates = getCache(ENV_VARIABLES.cacheCurrencyRatesKey);

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
            exchangeAmount={exchangeAmount}
            rates={rates}
            setExchangeAmount={setExchangeAmount}
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
