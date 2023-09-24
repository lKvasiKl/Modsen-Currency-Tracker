import { Component } from "react";
import PropTypes from "prop-types";

import { Label, InputContainer, Input } from "./styled";

class CurrencyInput extends Component {
  handleInputChange = (event) => {
    this.props.onChange(event);
  };

  render() {
    const { label, name, value } = this.props;

    return (
      <>
        <Label>{label}</Label>
        <InputContainer>
          <Input
            min="0"
            name={name}
            type="number"
            value={value}
            onChange={this.handleInputChange}
          />
        </InputContainer>
      </>
    );
  }
}

CurrencyInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CurrencyInput;
