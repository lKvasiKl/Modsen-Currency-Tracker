import PropTypes from "prop-types";
import { formatRateValue } from "@utils/formatingFunctions";

import CurrencyCard from "../СurrencyСard";

import { CardsList, CardsSectionContainer, CardsSectionTitle } from "./styled";

const CardsSection = ({ title, cardsArray, onClick, rates }) => {
  const handleCardClick = (id, imgPath) => () => {
    onClick({ id, imgPath });
  };

  return (
    <CardsSectionContainer>
      <CardsSectionTitle>{title}</CardsSectionTitle>
      <CardsList>
        {cardsArray.map((listItem) => {
          const { id, imgPath, title, rateValue } = listItem;

          return (
            <CurrencyCard
              imgPath={imgPath}
              key={title}
              rateValue={formatRateValue(rates, id, rateValue)}
              title={title}
              onClick={onClick && handleCardClick(id, imgPath)}
            />
          );
        })}
      </CardsList>
    </CardsSectionContainer>
  );
};

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  cardsArray: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  rates: PropTypes.object,
};

export default CardsSection;
