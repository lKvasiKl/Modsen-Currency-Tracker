import { PureComponent } from "react";
import PropTypes from "prop-types";

import { Modal } from "@components";
import { getCache } from "@utils/cachingFunctions";
import { formatDate } from "@utils/formatingFunctions";
import { DATE } from "@constants/timeline";
import DatePicker from "./DatePicker";
import CurrencyInput from "./CurrencyInput";
import {
  INPUT_CONFIG,
  INITIAL_INPUT_STATE,
  MIN_INPUT_VALUE,
  MAX_INPUT_VALUE,
  ERROR_TEXT,
} from "./config";

import { Button, Error } from "./styled";

class CurrencyInputModal extends PureComponent {
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
  };

  render() {
    const { currentDate, inputValue, isError } = this.state;

    return (
      <Modal onClose={this.handleCloseModal}>
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
