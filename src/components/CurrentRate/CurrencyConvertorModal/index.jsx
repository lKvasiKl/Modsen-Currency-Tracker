import { useState } from "react";
import PropTypes from "prop-types";

import { convertCurrency } from "@utils/convertingFunctions";
import { CURRENCY_DEFAULT } from "@constants/currency";
import { Modal } from "@components";
import { formatConvertedCurrency } from "@utils/formatingFunctions";
import { IMAGE_SIZE } from "@constants/styles/image";
import Select from "./Select";

import {
  CurrencyInput,
  Image,
  InputContainer,
  Label,
  CurrencyContainer,
  CurrencySelectContainer,
  Text,
  ConvertButton,
} from "./styled";

const CurrencyConvertorModal = ({
  setIsModalOpen,
  targetCurrency,
  exchangeAmount,
  setExchangeAmount,
  rates,
}) => {
  const { id: currencyShortName, imgPath } = targetCurrency;
  const fromCurrency = currencyShortName;

  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_DEFAULT);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const inputValue = Number(event.target.value);
    setExchangeAmount(inputValue);

    setConvertedCurrencyValue("");
  };

  const handleConvertButtonClick = () => {
    const toCurrency = selectedCurrency.id;
    const value = convertCurrency(
      exchangeAmount,
      fromCurrency,
      toCurrency,
      rates,
    );

    setConvertedCurrencyValue(Number(value));
  };

  return (
    <Modal onClose={handleCloseModal}>
      <Label>Amount</Label>
      <InputContainer>
        <CurrencyInput
          data-cy="amount-input"
          min="0"
          type="number"
          value={exchangeAmount}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Label>From:</Label>
      <CurrencyContainer>
        <Image
          alt={`${currencyShortName} icon`}
          src={imgPath}
          {...IMAGE_SIZE.M}
        />
        <Text>{currencyShortName}</Text>
      </CurrencyContainer>
      <Label>To:</Label>
      <CurrencySelectContainer>
        <Select
          selectedCurrency={selectedCurrency}
          setConvertedCurrencyValue={setConvertedCurrencyValue}
          setSelectedCurrency={setSelectedCurrency}
        />
      </CurrencySelectContainer>
      <ConvertButton
        data-cy="convert-button"
        onClick={handleConvertButtonClick}
      >
        Convert
      </ConvertButton>
      <Text data-cy="converted-result">
        {convertedCurrencyValue !== "" &&
          formatConvertedCurrency(
            exchangeAmount,
            fromCurrency,
            convertedCurrencyValue,
            selectedCurrency.id,
          )}
      </Text>
    </Modal>
  );
};

CurrencyConvertorModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  targetCurrency: PropTypes.object.isRequired,
  exchangeAmount: PropTypes.number.isRequired,
  setExchangeAmount: PropTypes.func.isRequired,
  rates: PropTypes.object,
};

export default CurrencyConvertorModal;
