import { useState } from "react";
import PropTypes from "prop-types";
import close from "@assets/icons/close.svg";
import convert from "@assets/icons/convert.svg";
import { convertCurrency } from "@utils/convertingFunctions";
import {
  formatDecimalTrimZeros,
  formatConvertedCurrency,
} from "@utils/formatingFunctions";

import { CURRENCY_DEFAULT } from "../../constants/currencyCard";

import {
  CloseButton,
  CurrencyInput,
  Image,
  InputContainer,
  Label,
  Modal,
  ModalContainer,
  CurrencyContainer,
  CurrencySelectContainer,
  Text,
  ConvertButton,
} from "./styled";
import Select from "./Select";

const CurrencyConvertorModal = ({
  setIsModalOpen,
  targetCurrency,
  exchangeAmount,
  setExchangeAmount,
  rates,
}) => {
  const { id, imgPath } = targetCurrency;
  const fromCurrency = id;

  const [convertedCurrencyValue, setConvertedCurrencyValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_DEFAULT);

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
    setExchangeAmount(null);
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

    setConvertedCurrencyValue(formatDecimalTrimZeros(value));
  };

  return (
    <ModalContainer>
      <Modal>
        <CloseButton onClick={handleCloseButtonClick}>
          <Image alt="Close icon" height="25px" src={close} width="25px" />
        </CloseButton>
        <Label>Amount</Label>
        <InputContainer>
          <CurrencyInput
            min="0"
            type="number"
            value={exchangeAmount}
            onChange={handleInputChange}
          />
          <Image alt="Convert icon" height="35px" src={convert} width="35px" />
        </InputContainer>
        <Label>From:</Label>
        <CurrencyContainer>
          <Image alt={`${id} icon`} height="40px" src={imgPath} width="40px" />
          <Text>{id}</Text>
        </CurrencyContainer>
        <Label>To:</Label>
        <CurrencySelectContainer>
          <Select
            selectedCurrency={selectedCurrency}
            setConvertedCurrencyValue={setConvertedCurrencyValue}
            setSelectedCurrency={setSelectedCurrency}
          />
        </CurrencySelectContainer>
        <ConvertButton onClick={handleConvertButtonClick}>
          Convert
        </ConvertButton>
        <Text>
          {convertedCurrencyValue &&
            formatConvertedCurrency(
              exchangeAmount,
              fromCurrency,
              convertedCurrencyValue,
              selectedCurrency.id,
            )}
        </Text>
      </Modal>
    </ModalContainer>
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
