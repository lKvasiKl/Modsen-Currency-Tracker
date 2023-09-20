import PropTypes from "prop-types";
import close from "@assets/icons/close.svg";
import convert from "@assets/icons/convert.svg";

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

const CurrencyConvertorModal = ({ setIsModalOpen, targetCurrency }) => {
  const { id, imgPath } = targetCurrency;

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContainer>
      <Modal>
        <CloseButton onClick={handleCloseButtonClick}>
          <Image alt="Close icon" height="25px" src={close} width="25px" />
        </CloseButton>
        <Label>Amount</Label>
        <InputContainer>
          <CurrencyInput />
          <Image alt="Convert icon" height="35px" src={convert} width="35px" />
        </InputContainer>
        <Label>From:</Label>
        <CurrencyContainer>
          <Image alt={`${id} icon`} height="40px" src={imgPath} width="40px" />
          <Text>{id}</Text>
        </CurrencyContainer>
        <Label>To:</Label>
        <CurrencySelectContainer>
          <Select />
        </CurrencySelectContainer>
        <ConvertButton>Convert</ConvertButton>
        <Text>150 USD = 140,31 EUR</Text>
      </Modal>
    </ModalContainer>
  );
};

CurrencyConvertorModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  targetCurrency: PropTypes.object.isRequired,
};

export default CurrencyConvertorModal;
