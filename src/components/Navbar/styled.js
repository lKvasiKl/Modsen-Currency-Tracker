import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 103px;
  background-color: #000000;
  padding: 0px 100px;

  img {
    height: 40px;
    width: 41.19px;
  }
`;

export const NavListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 657px;

  a {
    font-size: 20px;
    font-weight: 300;
    text-decoration: none;
    color: white;

    &:hover {
      color: #84dd37;
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;

export const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
`;
