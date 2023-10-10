import { Component } from "react";
import PropTypes from "prop-types";

import { Modal } from "@components";
import { getCache } from "@utils/cachingFunctions";
import { formatDate } from "@utils/formatingFunctions";
import { DATE } from "@constants/timeline";
import DatePicker from "./DatePicker";
import CurrencyInput from "./CurrencyInput";
import { MAX_CHART_ITEMS } from "../config";
import {
  INPUT_CONFIG,
  INITIAL_INPUT_STATE,
  MIN_INPUT_VALUE,
  MAX_INPUT_VALUE,
  ERROR_TEXT,
  CHART_ITEMS_LEFT_TEXT,
} from "./config";

import { Button, Text, Error } from "./styled";

class CurrencyInputModal extends Component {
  state = {
    currentDate: new Date(),
    inputValue: INITIAL_INPUT_STATE,
    remainingChartItems: 0,
  };

  loadCachedData(date) {
    const formattedDate = formatDate(date);
    const cachedData = getCache(this.props.id)[formattedDate];

    if (cachedData) {
      this.setState({
        inputValue: {
          openPriceInput: cachedData.openPrice,
          highPriceInput: cachedData.highPrice,
          lowPriceInput: cachedData.lowPrice,
          closePriceInput: cachedData.closePrice,
        },
        isError: false,
      });
    } else {
      this.setState({ inputValue: INITIAL_INPUT_STATE });
    }
  }

  calculateRemainingChartItems() {
    const selectedCurrencyId = this.props.id;
    const currencyData = getCache(selectedCurrencyId);
    const numberOfEntries = Object.keys(currencyData).length;
    const remainingItems = MAX_CHART_ITEMS - numberOfEntries;

    return Math.max(0, remainingItems);
  }

  componentDidMount() {
    this.loadCachedData(this.state.currentDate);

    const remainingItems = this.calculateRemainingChartItems();
    this.setState({ remainingChartItems: remainingItems });
  }

  handleCloseModal = () => {
    this.props.onClose();
  };

  handleUpdateDate = (direction) => {
    const { currentDate } = this.state;
    const offset = direction === DATE.prev ? -1 : 1;
    const updatedDate = new Date(currentDate);
    updatedDate.setDate(updatedDate.getDate() + offset);
    this.setState({ currentDate: updatedDate });
    this.loadCachedData(updatedDate);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      inputValue: {
        ...prevState.inputValue,
        [name]: value,
      },
      isError: false,
    }));
  };

  handleBlur = (event) => {
    const { name, value } = event.target;

    if (
      isNaN(value) ||
      value < MIN_INPUT_VALUE ||
      value > MAX_INPUT_VALUE ||
      value.trim() === ""
    ) {
      this.setState((prevState) => ({
        inputValue: {
          ...prevState.inputValue,
          [name]: "0",
        },
        isError: true,
      }));
    }
  };

  handleAddPriceButtonClick = () => {
    const { currentDate, inputValue } = this.state;
    this.props.onAddPrice(currentDate, inputValue);

    const remainingItems = this.calculateRemainingChartItems();
    this.setState({ remainingChartItems: remainingItems });
  };

  render() {
    const { currentDate, inputValue, isError, remainingChartItems } =
      this.state;

    return (
      <Modal onClose={this.handleCloseModal}>
        <Text>
          {CHART_ITEMS_LEFT_TEXT.replace(
            "{remainingChartItems}",
            remainingChartItems,
          )}
        </Text>
        <DatePicker
          currentDate={currentDate}
          onChange={this.handleUpdateDate}
        />
        {isError && <Error>{ERROR_TEXT}</Error>}
        {INPUT_CONFIG.map((config) => (
          <CurrencyInput
            key={config.name}
            label={config.label}
            name={config.name}
            value={inputValue[config.name]}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
          />
        ))}
        <Button
          data-cy="add-price-button"
          onClick={this.handleAddPriceButtonClick}
        >
          Add Price
        </Button>
      </Modal>
    );
  }
}

CurrencyInputModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddPrice: PropTypes.func.isRequired,
};

export default CurrencyInputModal;
