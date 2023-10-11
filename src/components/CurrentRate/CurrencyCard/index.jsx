import React from "react";
import PropTypes from "prop-types";

import { IMAGE_SIZE } from "@constants/styles/image";

import {
  CardContainer,
  Image,
  CardContent,
  CardTitle,
  CurrencyRate,
} from "./styled";

const CurrencyCard = React.memo(({ imgPath, title, rateValue, onClick }) => {
  return (
    <CardContainer data-cy="currency-card" onClick={onClick}>
      <Image alt="Currency icon" src={imgPath} {...IMAGE_SIZE.XL} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CurrencyRate>{rateValue}</CurrencyRate>
      </CardContent>
    </CardContainer>
  );
});

CurrencyCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rateValue: PropTypes.string,
  onClick: PropTypes.func,
};

export default CurrencyCard;
