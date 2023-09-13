import icon from "@assets/images/icon.webp";
import { NAVBAR_ITEMS } from "@constants/navigation";
import { Link } from "react-router-dom";

import Switch from "../Switch";

import { NavbarContainer, NavListContainer } from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img alt="Application icon" height="40px" src={icon} width="41.19px" />
      <NavListContainer>
        {NAVBAR_ITEMS.map((item) => {
          const { id, name, path } = item;

          return (
            <li key={id}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </NavListContainer>
      <Switch />
    </NavbarContainer>
  );
};

export default Navbar;
