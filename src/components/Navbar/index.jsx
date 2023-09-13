import icon from "@assets/images/icon.webp";
import { NAVBAR_ITEMS } from "@constants/navigation";
import { NavLink } from "react-router-dom";

import Switch from "../Switch";

import { NavbarContainer, NavLinksContainer } from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img alt="Application icon" height="40px" src={icon} width="41.19px" />
      <NavLinksContainer>
        {NAVBAR_ITEMS.map((item) => {
          const { id, name, path } = item;

          return (
            <li key={id}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          );
        })}
      </NavLinksContainer>
      <Switch />
    </NavbarContainer>
  );
};

export default Navbar;
