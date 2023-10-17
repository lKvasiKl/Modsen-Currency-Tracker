import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const textColor = ({ theme }) => theme.textColor;
const oceanBlueColor = ({ theme }) => theme.colors.oceanBlue;
const grayColor = ({ theme }) => theme.colors.gray;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXS = ({ theme }) => theme.space.XS;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;

export const LinksAccordion = styled.button`
  ${displayFlex}
  padding: ${spaceXS}px 0;
  border-bottom: 1px solid ${oceanBlueColor};
  justify-content: space-between;
  border: none;
  outline: none;
  transition: 0.4s;
  background-color: transparent;
`;

export const Title = styled.span`
  ${displayFlex}
  color: ${textColor};
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightS};
  font-style: normal;
  line-height: 24px;
  letter-spacing: -1px;
`;

export const Image = styled.img`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const LinksContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  overflow: hidden;
  flex-direction: column;

  a {
    padding-top: ${spaceXXS}px;
    color: ${grayColor};
    font-size: ${fontSizeM}px;
    font-weight: ${fontWeightS};
    line-height: normal;
    font-style: normal;
    text-decoration: none;

    &:hover {
      color: ${greenColor};
    }
  }
`;
