import PropTypes from "prop-types";

import {
  CardContainer,
  Image,
  CardContent,
  CardTitle,
  CurrencyRate,
} from "./styled";

const CurrencyCard = ({ imgPath, title, rateValue, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <Image alt="Currency icon" height="80px" src={imgPath} width="80px" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CurrencyRate>{rateValue}</CurrencyRate>
      </CardContent>
    </CardContainer>
  );
};

CurrencyCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rateValue: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CurrencyCard;
