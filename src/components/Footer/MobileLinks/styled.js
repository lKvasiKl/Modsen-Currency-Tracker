import styled from "styled-components";

export const LinksAccordion = styled.button`
  display: flex;
  justify-content: space-between;
  border: none;
  outline: none;
  padding: 15px 0;
  border-bottom: 1px solid #607d94;
  transition: 0.4s;
  background-color: transparent;
`;

export const Title = styled.span`
  display: flex;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-style: normal;
  font-weight: 400;
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
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
