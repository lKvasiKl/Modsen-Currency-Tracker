import { useCallback, useEffect, useState } from "react";

import { OverflowHidden } from "@styled";
import getCurriencies from "@services/currencyService";
import { getCache, saveCache, isCacheValid } from "@utils/dataCaching";
import usePortal from "@hooks/usePortal";
import { ENV_VARIABLES } from "@constants/envVariables";
import CardsSection from "./CardsSection";
import CurrencyConvertorModal from "./CurrencyConvertorModal";
import {
  STOCKS_CARD_DATA,
  QUOTES_CARD_DATA,
  CURRENCY_DEFAULT,
} from "@constants/currency";

import { Main } from "./styled";

const CurrentRate = () => {
  const [rates, setRates] = useState({
    expirationDate: new Date().getTime() + ENV_VARIABLES.cacheLifetime,
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
