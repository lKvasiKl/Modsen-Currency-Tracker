import logotype from "@assets/icons/logotype.svg";

import { FOOTER_DATA } from "../../constants/footer";
import FooterLinks from "../FooterLinks";

import {
  FooterConatiner,
  InfoContainer,
  Title,
  Text,
  Quote,
  Copyright,
  FooterWrapper,
  LinksContainer,
} from "./styled";

const Footer = () => {
  const { title, quote, footerSections, copyright } = FOOTER_DATA;

  return (
    <FooterConatiner>
      <FooterWrapper>
        <InfoContainer>
          <Title>
            <img
              alt="Application logotype"
              height="40px"
              src={logotype}
              width="45.534px"
            />
            <Text>{title}</Text>
          </Title>
          <Quote>{quote}</Quote>
        </InfoContainer>
        <LinksContainer>
          {footerSections.map((section) => (
            <FooterLinks key={section.title} {...section} />
          ))}
        </LinksContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterConatiner>
  );
};

export default Footer;
