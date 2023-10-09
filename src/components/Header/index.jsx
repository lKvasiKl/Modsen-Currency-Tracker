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

const { title, quote } = HEADER_DATA;

const Header = () => {
  return (
    <StyledHeader>
      <SectionContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Quote>{quote}</Quote>
        </TextContainer>
        <Logotype
          alt="Application logotype"
          height="300px"
          src={logotype}
          width="300px"
        />
      </SectionContainer>
    </StyledHeader>
  );
};

export default Header;
