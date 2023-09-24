import { Component } from "react";
import ReactDOM from "react-dom";
import { CURRENCY_DEFAULT } from "@constants/currency";
import { formatDate } from "@utils/formatingFunctions";
import { getCache, saveCache } from "@utils/cachingFunctions";

import CurrencySelect from "../CurrencySelect";
import CurrencyInfo from "../CurrencyInfo";
import CurrencyInputModal from "../CurrencyInputModal";

import { Main, ChartSection } from "./styled";

class CurrencyChart extends Component {
  state = {
    selectedCurrency: CURRENCY_DEFAULT,
    isModalOpen: false,
  };

  handleCurrencyChange = (newCurrency) => {
    this.setState({ selectedCurrency: newCurrency });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddPrice = (currentDate, inputValue) => {
    const formattedDate = formatDate(currentDate);
    const selectedCurrencyId = this.state.selectedCurrency.id;

    const currencyData = getCache(selectedCurrencyId);

    if (inputValue.firstInput > inputValue.secondInput) {
      alert("The maximum price value cannot be less than the minimum.");
      return;
    }

    currencyData[formattedDate] = {
      min: inputValue.firstInput,
      max: inputValue.secondInput,
    };

    saveCache(selectedCurrencyId, currencyData);
  };

  render() {
    return (
      <Main>
        <ChartSection>
          <CurrencySelect
            selectedCurrency={this.state.selectedCurrency}
            onCurrencyChange={this.handleCurrencyChange}
          />
          <CurrencyInfo
            selectedCurrency={this.state.selectedCurrency}
            onClick={this.handleOpenModal}
          />
        </ChartSection>
        {this.state.isModalOpen &&
          ReactDOM.createPortal(
            <CurrencyInputModal
              onAddPrice={this.handleAddPrice}
              onClose={this.handleCloseModal}
            />,
            document.getElementById("root"),
          )}
      </Main>
    );
  }
}

export default CurrencyChart;
