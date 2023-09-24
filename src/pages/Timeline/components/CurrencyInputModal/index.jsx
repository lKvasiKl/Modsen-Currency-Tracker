import { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "@components";

import DatePicker from "./components/DatePicker";
import CurrencyInput from "./components/CurrencyInput";
import { Button } from "./styled";

class CurrencyInputModal extends Component {
  state = {
    currentDate: new Date(),
    inputValue: {
      firstInput: 0,
      secondInput: 0,
    },
  };

  handleCloseModal = () => {
    this.props.onClose();
  };

  handleUpdateDate = (direction) => {
    const { currentDate } = this.state;
    const offset = direction === "prev" ? -1 : 1;
    const updatedDate = new Date(currentDate);
    updatedDate.setDate(updatedDate.getDate() + offset);
    this.setState({ currentDate: updatedDate });
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
          label="Low price"
          name="firstInput"
          value={this.state.inputValue.firstInput}
          onChange={this.handleInputChange}
        />
        <CurrencyInput
          label="High price"
          name="secondInput"
          value={this.state.inputValue.secondInput}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleAddPriceButtonClick}>Add Price</Button>
      </Modal>
    );
  }
}

CurrencyInputModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddPrice: PropTypes.func.isRequired,
};

export default CurrencyInputModal;
