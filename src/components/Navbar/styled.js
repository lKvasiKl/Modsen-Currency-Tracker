import styled from "styled-components";

import {
  displayFlex,
  displayNone,
  displayInlineBlock,
} from "@constants/styles/mixins";

export const NavbarContainer = styled.nav`
  ${displayFlex}
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0 ${({ theme }) => theme.space.XXL}px;
  align-items: center;
  justify-content: space-between;
  height: 103px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: 0 ${({ theme }) => theme.space.L}px;
  }
`;

export const Logotype = styled.img`
  user-select: none;
`;

export const NavLinksContainer = styled.ul`
  ${displayFlex}
  justify-content: space-between;
  list-style-type: none;
  width: 657px;

  a {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.XS};
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }

    &.active {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    gap: ${({ theme }) => theme.space.L}px;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${displayNone}
  }
`;
export const SwitchContainer = styled.div`
  width: 100%;
  display: contents;
  max-width: 50px;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${displayNone}
  }
`;

export const ToggleSwitchLabel = styled.label`
  ${displayInlineBlock}
  margin: 0 ${({ theme }) => theme.space.XS12}px;
  width: 50px;
  position: relative;
  height: 25px;
`;
