import { useState } from "react";
import { NavLink } from "react-router-dom";

import { NAVBAR_ITEMS } from "@constants/navigation";
import ThemeToggle from "../ThemeToggle";

import { BurgerMenuContainer, BurgerLine, BurgerMenuItems } from "./styled";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerMenuContainer data-cy="nav-burger-menu" onClick={handleToggleMenu}>
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
        <BurgerLine $isOpen={isOpen} />
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
