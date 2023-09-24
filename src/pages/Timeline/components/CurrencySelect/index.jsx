import { Component } from "react";
import PropTypes from "prop-types";
import { QUOTES_CARD_DATA } from "@constants/currency";

import { Option, Select } from "./styled";

class CurrencySelect extends Component {
  handleSelectChange = (event) => {
    const selectedCurrency = QUOTES_CARD_DATA.find(
      (currency) => currency.title === event.target.value,
    );

    this.props.onCurrencyChange(selectedCurrency);
  };

  render() {
    return (
      <Select
        value={this.props.selectedCurrency.title}
        onChange={this.handleSelectChange}
      >
        {QUOTES_CARD_DATA.map((listItem) => {
          const { id, title } = listItem;

          return <Option key={id}>{title}</Option>;
        })}
      </Select>
    );
  }
}

CurrencySelect.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
};

export default CurrencySelect;
