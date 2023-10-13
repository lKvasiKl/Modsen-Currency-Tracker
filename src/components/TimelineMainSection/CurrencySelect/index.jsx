import { PureComponent } from "react";
import PropTypes from "prop-types";

import { QUOTES_CARD_DATA } from "@constants/currency";

import { Option, Select } from "./styled";

const CURRENCY_OPTION = QUOTES_CARD_DATA.map((listItem) => {
  const { id, title } = listItem;
  return <Option key={id}>{title}</Option>;
});

class CurrencySelect extends PureComponent {
  handleSelectChange = (event) => {
    const selectedCurrency = QUOTES_CARD_DATA.find(
      (currency) => currency.title === event.target.value,
    );

    this.props.onCurrencyChange(selectedCurrency);
  };

  render() {
    const { title } = this.props.selectedCurrency.title;

    return (
      <Select
        data-cy="currency-select"
        value={title}
        onChange={this.handleSelectChange}
      >
        {CURRENCY_OPTION}
      </Select>
    );
  }
}

CurrencySelect.propTypes = {
  onCurrencyChange: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
};

export default CurrencySelect;
