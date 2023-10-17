import React from "react";
import { HEADER_DATA, IMAGE_CONFIG } from "./config";

import {
  Logotype,
  Quote,
  StyledHeader,
  TextContainer,
  Title,
  SectionContainer,
} from "./styled";

const { title, quote } = HEADER_DATA;

const Header = React.memo(() => {
  return (
    <StyledHeader>
      <SectionContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Quote>{quote}</Quote>
        </TextContainer>
        <Logotype {...IMAGE_CONFIG} />
      </SectionContainer>
    </StyledHeader>
  );
});

export default Header;
