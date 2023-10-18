import { useCallback, useEffect, useState } from "react";

import { OverflowHidden } from "@styled";
import getCurriencies from "@services/currencyService";
import { getCache, saveCache, isCacheValid } from "@utils/dataCaching";
import usePortal from "@hooks/usePortal";
import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";
import CardsSection from "./CardsSection";
import CurrencyConvertorModal from "./CurrencyConvertorModal";
import {
  STOCKS_CARD_DATA,
  QUOTES_CARD_DATA,
  CURRENCY_DEFAULT,
} from "@constants/currency";

import { Main } from "./styled";

const CACHE_LIFE_TIME = getEnvVariables(ENV_VARIABLE_KEYS.cacheLifetime);
const LUST_UPDATE_KEY = getEnvVariables(ENV_VARIABLE_KEYS.cacheLastUpdateKey);
const CURRENCY_RATES_KEY = getEnvVariables(
  ENV_VARIABLE_KEYS.cacheCurrencyRatesKey,
);

const CurrentRate = () => {
  const [rates, setRates] = useState({
    expirationDate: new Date().getTime() + CACHE_LIFE_TIME,
    data: {},
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState(CURRENCY_DEFAULT);

  const modalPortal = usePortal();

  const handleCardClick = useCallback(
    ({ id, imgPath }) => {
      if (Object.keys(rates.data).length === 0) {
        return;
      }

      setIsModalOpen((prevSatate) => !prevSatate);
      setExchangeAmount(String(rates.data[id].value));
      setTargetCurrency({
        id,
        imgPath,
      });
    },
    [rates.data],
  );

  const getRatesValue = async () => {
    const currentTime = new Date().getTime();
    const currencies = QUOTES_CARD_DATA.map((quote) => quote.id);
    const response = await getCurriencies(currencies);

    setRates({
      expirationDate: currentTime + CACHE_LIFE_TIME,
      data: response,
    });

    saveCache(LUST_UPDATE_KEY, currentTime);
    saveCache(CURRENCY_RATES_KEY, {
      expirationDate: currentTime + CACHE_LIFE_TIME,
      data: response,
    });
  };

  useEffect(() => {
    const cachedRates = getCache(CURRENCY_RATES_KEY);

    if (isCacheValid(cachedRates)) {
      setRates(cachedRates);
    } else {
      getRatesValue();
    }
  }, []);

  return (
    <Main>
      <CardsSection
        $isInteractive={false}
        cardsArray={STOCKS_CARD_DATA}
        title="Stocks"
      />
      <CardsSection
        $isInteractive={true}
        cardsArray={QUOTES_CARD_DATA}
        rates={rates}
        title="Quotes"
        onClick={handleCardClick}
      />
      {isModalOpen &&
        modalPortal(
          <CurrencyConvertorModal
            exchangeAmount={exchangeAmount}
            rates={rates}
            setExchangeAmount={setExchangeAmount}
            setIsModalOpen={setIsModalOpen}
            targetCurrency={targetCurrency}
          />,
        )}
      {isModalOpen && <OverflowHidden />}
    </Main>
  );
};

export default CurrentRate;
