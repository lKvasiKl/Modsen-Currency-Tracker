import React from "react";
import PropTypes from "prop-types";

import { IMAGE_CONFIG } from "./config";

import {
  CardContainer,
  Image,
  CardContent,
  CardTitle,
  CurrencyRate,
} from "./styled";

const CurrencyCard = React.memo(
  ({ imgPath, title, rateValue, onClick, $isInteractive }) => {
    return (
      <CardContainer
        data-cy="currency-card"
        onClick={onClick}
        $isInteractive={$isInteractive}
      >
        <Image src={imgPath} {...IMAGE_CONFIG} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CurrencyRate>{rateValue}</CurrencyRate>
        </CardContent>
      </CardContainer>
    );
  },
);

CurrencyCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  $isInteractive: PropTypes.bool.isRequired,
  rateValue: PropTypes.string,
  onClick: PropTypes.func,
};

export default CurrencyCard;
