import styled from "styled-components";

export const NavbarContainer = styled.nav`
  ${({ theme }) => theme.display.flex};
  align-items: center;
  justify-content: space-between;
  height: 103px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0 ${({ theme }) => theme.space.oneHundred}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: 0 ${({ theme }) => theme.space.thirty}px;
  }
`;

export const Logotype = styled.img`
  user-select: none;
`;

export const NavLinksContainer = styled.ul`
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  list-style-type: none;
  width: 657px;

  a {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.XS};
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

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    justify-content: center;
    gap: ${({ theme }) => theme.space.thirty}px;
  }

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${({ theme }) => theme.display.none};
  }
`;
export const SwitchContainer = styled.div`
  width: 100%;
  display: contents;
  max-width: 50px;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${({ theme }) => theme.display.none};
  }
`;

export const ToggleSwitchLabel = styled.label`
  position: relative;
  ${({ theme }) => theme.display.inlineBlock};
  width: 50px;
  height: 25px;
  margin: 0 ${({ theme }) => theme.space.twelve}px;
`;
