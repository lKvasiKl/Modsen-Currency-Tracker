import { useState } from "react";
import usd from "@assets/icons/dollar.svg";
import arrow from "@assets/icons/arrow.svg";

import { QUOTES_CARD_DATA } from "../../../constants/currencyCard";
import { Text, Image } from "../styled";

import {
  SelectButton,
  ButtonContentContainer,
  ArrowIcon,
  SelectList,
  SelectsItem,
} from "./styled";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    id: "USD",
    imgPath: usd,
  });

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => () => {
    setSelectedItem({
      id: item.id,
      imgPath: item.imgPath,
    });
    setIsOpen(false);
  };

  return (
    <>
      <SelectButton onClick={toggleMenu}>
        <ButtonContentContainer>
          <Image
            alt={`${selectedItem.id} icon`}
            height="40px"
            src={selectedItem.imgPath}
            width="40px"
          />
          <Text>{selectedItem.id}</Text>
        </ButtonContentContainer>
        <ArrowIcon
          alt="Arrow icon"
          height="20px"
          isOpen={isOpen}
          src={arrow}
          width="20px"
        />
      </SelectButton>
      <SelectList isOpen={isOpen}>
        {QUOTES_CARD_DATA.map((listItem) => {
          const { id, imgPath } = listItem;

          return (
            <SelectsItem key={id} onClick={handleItemClick(listItem)}>
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

export default Select;
