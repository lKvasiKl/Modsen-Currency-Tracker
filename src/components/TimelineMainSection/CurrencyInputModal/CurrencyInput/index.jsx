import { PureComponent } from "react";
import PropTypes from "prop-types";

import { Label, InputContainer, Input } from "./styled";

class CurrencyInput extends PureComponent {
  handleInputChange = (event) => {
    this.props.onChange(event);
  };

  render() {
    const { label, name, value, onBlur } = this.props;

    return (
      <>
        <Label>{label}</Label>
        <InputContainer>
          <Input
            name={name}
            type="number"
            value={value}
            onChange={this.handleInputChange}
            onBlur={onBlur}
          />
        </InputContainer>
      </>
    );
  }
}

CurrencyInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default CurrencyInput;
