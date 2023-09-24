import { Component } from "react";
import PropTypes from "prop-types";

import {
  CurrencyContainer,
  Description,
  Image,
  TextContainer,
  Title,
} from "./styled";

class CurrencyInfo extends Component {
  handleCurrencyInfoClick = () => {
    this.props.onClick();
  };

  render() {
    const { id, imgPath, title } = this.props.selectedCurrency;

    return (
      <CurrencyContainer onClick={this.handleCurrencyInfoClick}>
        <Image alt={`${id} icon`} height="80px" src={imgPath} width="80px" />
        <TextContainer>
          <Title>{title}</Title>
          <Description>{id}</Description>
        </TextContainer>
      </CurrencyContainer>
    );
  }
}

export default CurrencyInfo;

CurrencyInfo.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
