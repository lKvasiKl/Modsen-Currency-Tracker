import styled from "styled-components";

export const LinksAccordion = styled.button`
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.space.fifteen}px 0;
  border-bottom: 1px solid #607d94;
  transition: 0.4s;
  background-color: transparent;
`;

export const Title = styled.span`
  ${({ theme }) => theme.display.flex};
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const Image = styled.img`
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const LinksContainer = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  overflow: hidden;
  flex-direction: column;

  a {
    padding-top: ${({ theme }) => theme.space.ten}px;
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
