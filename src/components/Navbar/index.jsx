import React from "react";

import { NavbarContainer, IconContainer, NavListContainer } from "./styled";
import icon from "@assets/images/icon.webp";
import { NAVBAR_ITEMS } from "@constants/navigation";
import { Link } from "react-router-dom";
import Switch from "../Switch";

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconContainer>
        <img src={icon} width="41.19px" height="40px" />
      </IconContainer>
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
