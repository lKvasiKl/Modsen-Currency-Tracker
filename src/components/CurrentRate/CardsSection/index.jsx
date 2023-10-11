import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { formatRateValue } from "@utils/formatingFunctions";
import CurrencyCard from "../CurrencyCard";

import { CardsList, CardsSectionContainer, CardsSectionTitle } from "./styled";

const CardsSection = React.memo(({ title, cardsArray, onClick, rates }) => {
  const handleCardClick = (id, imgPath) => () => {
    onClick({ id, imgPath });
  };

  const formattedRateValues = useMemo(() => {
    return cardsArray.map(({ id, rateValue }) =>
      formatRateValue(rates, id, rateValue),
    );
  }, [cardsArray, rates]);

  return (
    <CardsSectionContainer>
      <CardsSectionTitle>{title}</CardsSectionTitle>
      <CardsList>
        {cardsArray.map(({ id, imgPath, title }, index) => {
          return (
            <CurrencyCard
              imgPath={imgPath}
              key={title}
              rateValue={formattedRateValues[index]}
              title={title}
              onClick={onClick && handleCardClick(id, imgPath)}
            />
          );
        })}
      </CardsList>
    </CardsSectionContainer>
  );
});

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  cardsArray: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  rates: PropTypes.object,
};

export default CardsSection;
