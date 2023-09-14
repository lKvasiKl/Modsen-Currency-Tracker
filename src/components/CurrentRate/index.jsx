import { STOCKS_CARD_DATA, QUOTES_CARD_DATA } from "@constants/currencyCard";

import CardsSection from "../CardsSection";

import { Main } from "./styled";

const CurrentRate = () => {
  return (
    <Main>
      <CardsSection cardsArray={STOCKS_CARD_DATA} title="Stocks" />
      <CardsSection cardsArray={QUOTES_CARD_DATA} title="Quotes" />
    </Main>
  );
};

export default CurrentRate;
