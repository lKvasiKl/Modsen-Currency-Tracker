import styled from "styled-components";

import { flexColumn, lineHeightLarge } from "@constants/styles/mixins";

const textColor = ({ theme }) => theme.textColor;
const grayColor = ({ theme }) => theme.colors.gray;
const greenColor = ({ theme }) => theme.colors.green;
const spaceS17 = ({ theme }) => theme.space.S17;
const spaceL40 = ({ theme }) => theme.space.L40;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;

export const LinksSection = styled.section`
  ${flexColumn}
`;

export const Title = styled.span`
  ${lineHeightLarge}
  color: ${textColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightS};
`;

export const LinksContainer = styled.div`
  ${flexColumn}
  padding-top: ${spaceL40}px;
  gap: ${spaceS17}px;

  a {
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
