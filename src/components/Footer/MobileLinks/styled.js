import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

export const LinksAccordion = styled.button`
  ${displayFlex}
  justify-content: space-between;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.space.XS}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.oceanBlue};
  transition: 0.4s;
  background-color: transparent;
`;

export const Title = styled.span`
  ${displayFlex}
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const Image = styled.img`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const LinksContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  overflow: hidden;
  flex-direction: column;

  a {
    padding-top: ${({ theme }) => theme.space.XXS}px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.S};
    line-height: normal;
    font-style: normal;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
