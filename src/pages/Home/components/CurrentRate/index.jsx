import CardsSection from "../CardsSection";
import {
  STOCKS_CARD_DATA,
  QUOTES_CARD_DATA,
} from "../../constants/currencyCard";

import { Main } from "./styled";

const CurrentRate = () => {
  // Just check if the styles are applied when the function is present
  const handleCardClick = () => {};

  return (
    <Main>
      <CardsSection cardsArray={STOCKS_CARD_DATA} title="Stocks" />
      <CardsSection
        cardsArray={QUOTES_CARD_DATA}
        title="Quotes"
        onClick={handleCardClick}
      />
    </Main>
  );
};

export default CurrentRate;
