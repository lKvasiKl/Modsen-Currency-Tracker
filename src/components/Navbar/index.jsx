import logotype from "@assets/icons/logotype.svg";
import { NAVBAR_ITEMS } from "@constants/navigation";
import { NavLink } from "react-router-dom";

import Switch from "./Switch";
import BurgerMenu from "./BurgerMenu";
import {
  NavbarContainer,
  Logotype,
  NavLinksContainer,
  SwitchContainer,
} from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logotype
        alt="Application logotype"
        data-cy="nav-logo"
        height="40px"
        src={logotype}
        width="41.19px"
      />
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
        <Switch />
      </SwitchContainer>
      <BurgerMenu />
    </NavbarContainer>
  );
};

export default Navbar;
