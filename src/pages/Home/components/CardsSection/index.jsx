import PropTypes from "prop-types";

import CurrencyCard from "../СurrencyСard";

import { CardsList, CardsSectionContainer, CardsSectionTitle } from "./styled";

const CardsSection = ({ title, cardsArray, onClick }) => {
  return (
    <CardsSectionContainer>
      <CardsSectionTitle>{title}</CardsSectionTitle>
      <CardsList>
        {cardsArray.map((listItem) => {
          const { imgPath, title, rateValue } = listItem;

          return (
            <CurrencyCard
              imgPath={imgPath}
              key={title}
              rateValue={rateValue}
              title={title}
              onClick={onClick}
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
};

export default CardsSection;
