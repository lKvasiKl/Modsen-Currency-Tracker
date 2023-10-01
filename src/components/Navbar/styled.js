import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 103px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0px 100px;

  @media (max-width: 1200px) {
    padding: 0px 30px;
  }
`;

export const Logotype = styled.img`
  user-select: none;
`;

export const NavLinksContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 657px;

  a {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 300;
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }

    &.active {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
export const SwitchContainer = styled.div`
  width: 100%;
  max-width: 50px;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
`;
