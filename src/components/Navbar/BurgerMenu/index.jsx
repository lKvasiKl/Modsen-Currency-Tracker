import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import { NAVBAR_ITEMS } from "@constants/navigation";
import ThemeToggle from "../ThemeToggle";

import { BurgerMenuContainer, BurgerLine, BurgerMenuItems } from "./styled";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const BURGER_LINE_ELEMENTS = Array.from({ length: 3 }, (_, index) => (
    <BurgerLine $isOpen={isOpen} key={index} />
  ));

  return (
    <>
      <BurgerMenuContainer data-cy="nav-burger-menu" onClick={handleToggleMenu}>
        {BURGER_LINE_ELEMENTS}
      </BurgerMenuContainer>
      {isOpen && (
        <BurgerMenuItems>
          {Object.keys(NAVBAR_ITEMS).map((itemName) => {
            const { path } = NAVBAR_ITEMS[itemName];

            return (
              <li key={itemName}>
                <NavLink to={path} onClick={handleCloseMenu}>
                  {itemName}
                </NavLink>
              </li>
            );
          })}
          <ThemeToggle />
        </BurgerMenuItems>
      )}
    </>
  );
};

export default BurgerMenu;
