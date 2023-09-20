import logotype from "@assets/icons/logotype.svg";
import { HEADER_DATA } from "@constants/header";

import {
  Logotype,
  Quote,
  StyledHeader,
  TextContainer,
  Title,
  SectionContainer,
} from "./styled";

const Header = () => {
  const { title, quote } = HEADER_DATA;

  return (
    <StyledHeader>
      <SectionContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Quote>{quote}</Quote>
        </TextContainer>
        <Logotype
          alt="Application logotype"
          height="312.737px"
          src={logotype}
          width="299.43px"
        />
      </SectionContainer>
    </StyledHeader>
  );
};

export default Header;
