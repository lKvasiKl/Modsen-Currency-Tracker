import { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "@components";
import { getCache } from "@utils/cachingFunctions";
import { formatDate } from "@utils/formatingFunctions";

import DatePicker from "./components/DatePicker";
import CurrencyInput from "./components/CurrencyInput";
import { Button, Error } from "./styled";

const INITIAL_INPUT_STATE = {
  openPriceInput: "0",
  highPriceInput: "0",
  lowPriceInput: "0",
  closePriceInput: "0",
};

class CurrencyInputModal extends Component {
  state = {
    currentDate: new Date(),
    inputValue: INITIAL_INPUT_STATE,
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

  componentDidMount() {
    this.loadCachedData(this.state.currentDate);
  }

  handleCloseModal = () => {
    this.props.onClose();
  };

  handleUpdateDate = (direction) => {
    const { currentDate } = this.state;
    const offset = direction === "prev" ? -1 : 1;
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

    if (isNaN(value) || value < 0 || value > 1000000 || value.trim() === "") {
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
  };

  render() {
    const { currentDate, inputValue, isError } = this.state;

    return (
      <Modal onClose={this.handleCloseModal}>
        <DatePicker
          currentDate={currentDate}
          onChange={this.handleUpdateDate}
        />
        {isError && (
          <Error>The price must be more then 0 and less then 1000000</Error>
        )}
        <CurrencyInput
          label="Open price"
          name="openPriceInput"
          value={inputValue.openPriceInput}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <CurrencyInput
          label="High price"
          name="highPriceInput"
          value={inputValue.highPriceInput}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <CurrencyInput
          label="Low price"
          name="lowPriceInput"
          value={inputValue.lowPriceInput}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <CurrencyInput
          label="Close price"
          name="closePriceInput"
          value={inputValue.closePriceInput}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
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
