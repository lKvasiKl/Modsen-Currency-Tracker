import { PureComponent } from "react";
import PropTypes from "prop-types";

import { IMAGE_SIZE } from "@constants/styles/image";

import {
  CurrencyContainer,
  Description,
  Image,
  TextContainer,
  Title,
} from "./styled";

class CurrencyInfo extends PureComponent {
  handleCurrencyInfoClick = () => {
    if (!this.props.isChartCanBuild) {
      this.props.onClick();
    }
  };

  render() {
    const { id, imgPath, title } = this.props.selectedCurrency;
    const { isChartCanBuild } = this.props;

    return (
      <CurrencyContainer
        $isChartCanBuild={isChartCanBuild}
        data-cy="currency-info"
        onClick={this.handleCurrencyInfoClick}
      >
        <Image alt={`${id} icon`} src={imgPath} {...IMAGE_SIZE.XL} />
        <TextContainer>
          <Title data-cy="currency-info-text">{title}</Title>
          <Description data-cy="currency-info-id">{id}</Description>
        </TextContainer>
      </CurrencyContainer>
    );
  }
}

export default CurrencyInfo;

CurrencyInfo.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  isChartCanBuild: PropTypes.bool.isRequired,
};
