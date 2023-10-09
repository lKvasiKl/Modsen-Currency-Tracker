import { useState } from "react";
import PropTypes from "prop-types";

import arrow from "@assets/icons/arrow.svg";
import { QUOTES_CARD_DATA } from "@constants/currency";
import { Text, Image } from "../styled";

import {
  SelectButton,
  ButtonContentContainer,
  ArrowIcon,
  SelectList,
  SelectsItem,
} from "./styled";

const Select = ({
  selectedCurrency,
  setSelectedCurrency,
  setConvertedCurrencyValue,
}) => {
  const { id, imgPath } = selectedCurrency;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCurrencyClick = (currency) => () => {
    setSelectedCurrency({
      id: currency.id,
      imgPath: currency.imgPath,
      valueRate: currency.valueRate,
    });
    setIsOpen(false);
    setConvertedCurrencyValue("");
  };

  return (
    <>
      <SelectButton data-cy="to-currency" onClick={toggleMenu}>
        <ButtonContentContainer>
          <Image alt={`${id} icon`} height="40px" src={imgPath} width="40px" />
          <Text>{id}</Text>
        </ButtonContentContainer>
        <ArrowIcon
          $isOpen={isOpen}
          alt="Arrow icon"
          height="20px"
          src={arrow}
          width="20px"
        />
      </SelectButton>
      <SelectList $isOpen={isOpen}>
        {QUOTES_CARD_DATA.map((listItem) => {
          const { id, imgPath } = listItem;

          return (
            <SelectsItem
              data-cy={`select-option-${id}`}
              key={id}
              onClick={handleCurrencyClick(listItem)}
            >
              <Image
                alt={`${id} icon`}
                height="40px"
                src={imgPath}
                width="40px"
              />
              <Text>{id}</Text>
            </SelectsItem>
          );
        })}
      </SelectList>
    </>
  );
};

Select.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  setSelectedCurrency: PropTypes.func.isRequired,
  setConvertedCurrencyValue: PropTypes.func.isRequired,
};

export default Select;
