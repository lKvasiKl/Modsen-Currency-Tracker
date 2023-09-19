import close from "@assets/icons/close.svg";
import convert from "@assets/icons/convert.svg";
import usd from "@assets/icons/dollar.svg";

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

const CurrencyConvertorModal = () => {
  return (
    <ModalContainer>
      <Modal>
        <CloseButton>
          <Image alt="Close icon" height="25px" src={close} width="25px" />
        </CloseButton>
        <Label>Amount</Label>
        <InputContainer>
          <CurrencyInput />
          <Image alt="Convert icon" height="35px" src={convert} width="35px" />
        </InputContainer>
        <Label>From:</Label>
        <CurrencyContainer>
          <Image alt="USD icon" height="40px" src={usd} width="40px" />
          <Text>USD</Text>
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

export default CurrencyConvertorModal;
