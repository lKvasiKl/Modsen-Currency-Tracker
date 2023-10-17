import styled from "styled-components";

import { normalFontStyle, flexColumn } from "@constants/styles/mixins";

const maxMobileWidthS = ({ theme }) => theme.media.S;

const textColor = ({ theme }) => theme.textColor;
const spaceS = ({ theme }) => theme.space.S;
const spaceXXL110 = ({ theme }) => theme.space.XXL110;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const Title = styled.h2`
  ${normalFontStyle}
  color: ${textColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightS};
  margin-top: ${spaceXXL110}px;
  text-align: center;

  @media (max-width: ${maxMobileWidthS}px) {
    padding: 0 ${spaceS}px;
  }
`;
