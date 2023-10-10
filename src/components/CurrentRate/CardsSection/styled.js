import styled from "styled-components";

export const CardsSectionContainer = styled.section`
  ${({ theme }) => theme.display.flexColumn};
  margin-bottom: ${({ theme }) => theme.space.eightySix}px;
  width: 100%;
  max-width: 1140px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: 0 ${({ theme }) => theme.space.thirty}px;
  }
`;

export const CardsSectionTitle = styled.p`
  max-width: 520px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 41.143px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGray};
  padding-bottom: ${({ theme }) => theme.space.twentyFive}px;
  margin-bottom: ${({ theme }) => theme.space.fifty}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    max-width: unset;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
  }
`;

export const CardsList = styled.div`
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    justify-content: unset;
    flex-direction: column;
  }
`;
