import { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "@components";
import { getCache } from "@utils/cachingFunctions";
import { formatDate } from "@utils/formatingFunctions";

import DatePicker from "./components/DatePicker";
import CurrencyInput from "./components/CurrencyInput";
import { Button } from "./styled";

const INITIAL_INPUT_STATE = {
  openPriceInput: 0,
  highPriceInput: 0,
  lowPriceInput: 0,
  closePriceInput: 0,
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
        [name]: Number(value),
      },
    }));
  };

  handleAddPriceButtonClick = () => {
    const { currentDate, inputValue } = this.state;
    this.props.onAddPrice(currentDate, inputValue);
  };

  render() {
    return (
      <Modal onClose={this.handleCloseModal}>
        <DatePicker
          currentDate={this.state.currentDate}
          onChange={this.handleUpdateDate}
        />
        <CurrencyInput
          label="Open price"
          name="openPriceInput"
          value={this.state.inputValue.openPriceInput}
          onChange={this.handleInputChange}
        />
        <CurrencyInput
          label="High price"
          name="highPriceInput"
          value={this.state.inputValue.highPriceInput}
          onChange={this.handleInputChange}
        />
        <CurrencyInput
          label="Low price"
          name="lowPriceInput"
          value={this.state.inputValue.lowPriceInput}
          onChange={this.handleInputChange}
        />
        <CurrencyInput
          label="Close price"
          name="closePriceInput"
          value={this.state.inputValue.closePriceInput}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleAddPriceButtonClick}>Add Price</Button>
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
