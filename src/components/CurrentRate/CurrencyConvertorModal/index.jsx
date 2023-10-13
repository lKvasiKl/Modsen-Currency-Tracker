import { useCallback, useState } from "react";
import PropTypes from "prop-types";

import { convertCurrency } from "@utils/currencyConvertor";
import { CURRENCY_DEFAULT } from "@constants/currency";
import { Modal } from "@components";
import { IMAGE_SIZE } from "@constants/styles/image";
import { ENV_VARIABLES } from "@constants/envVariables";
import Select from "./Select";
import { AMOUNT_LABEL, ERROR_MESSAGE, FROM_LABEL, TO_LABEL } from "./config";

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
  const [error, setError] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_DEFAULT);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 0 || inputValue === "") {
      setExchangeAmount(inputValue);
      setConvertedCurrencyValue("");
    }

    setError("");
  };

  const handleConvertButtonClick = () => {
    if (!exchangeAmount) {
      setError(ERROR_MESSAGE);
    }

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
      <Label>{AMOUNT_LABEL}</Label>
      <InputContainer>
        <CurrencyInput
          data-cy="amount-input"
          value={exchangeAmount}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Label>{FROM_LABEL}</Label>
      <CurrencyContainer>
        <Image
          alt={`${currencyShortName} icon`}
          src={imgPath}
          {...IMAGE_SIZE.M}
        />
        <Text>{currencyShortName}</Text>
      </CurrencyContainer>
      <Label>{TO_LABEL}</Label>
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
          exchangeAmount &&
          `${Number(
            Number(exchangeAmount).toFixed(ENV_VARIABLES.decimalPlaces),
          )} ${fromCurrency} = ${convertedCurrencyValue} ${
            selectedCurrency.id
          }`}
        {error !== "" && error}
      </Text>
    </Modal>
  );
};

CurrencyConvertorModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  targetCurrency: PropTypes.object.isRequired,
  exchangeAmount: PropTypes.string.isRequired,
  setExchangeAmount: PropTypes.func.isRequired,
  rates: PropTypes.object,
};

export default CurrencyConvertorModal;
