import React from "react";
import { NavLink } from "react-router-dom";

import { NAVBAR_ITEMS } from "@constants/navigation";
import ThemeToggle from "./ThemeToggle";
import BurgerMenu from "./BurgerMenu";
import { IMAGE_CONFIG } from "./config";

import {
  NavbarContainer,
  Logotype,
  NavLinksContainer,
  SwitchContainer,
} from "./styled";

const Navbar = React.memo(() => {
  return (
    <NavbarContainer>
      <Logotype data-cy="nav-logo" {...IMAGE_CONFIG} />
      <NavLinksContainer data-cy="nav-links-container">
        {Object.keys(NAVBAR_ITEMS).map((itemName) => {
          const { path } = NAVBAR_ITEMS[itemName];

          return (
            <li key={itemName}>
              <NavLink data-cy={`nav-${itemName}`} to={path}>
                {itemName}
              </NavLink>
            </li>
          );
        })}
      </NavLinksContainer>
      <SwitchContainer>
        <ThemeToggle />
      </SwitchContainer>
      <BurgerMenu />
    </NavbarContainer>
  );
});

export default Navbar;
