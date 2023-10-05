import logotype from "@assets/icons/logotype.svg";

import { FOOTER_DATA } from "../../constants/footer";

import FooterLinks from "./Links";
import {
  FooterConatiner,
  InfoContainer,
  Title,
  Image,
  Text,
  Quote,
  Copyright,
  FooterWrapper,
  LinksContainer,
  MobileLinksContainer,
} from "./styled";
import MobileLinks from "./MobileLinks";

const { title, quote, footerSections, copyright } = FOOTER_DATA;

const Footer = () => {
  return (
    <FooterConatiner>
      <FooterWrapper>
        <InfoContainer>
          <Title>
            <Image
              alt="Application logotype"
              height="40px"
              src={logotype}
              width="45px"
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
        <MobileLinksContainer>
          {footerSections.map((section) => (
            <MobileLinks key={section.title} {...section} />
          ))}
        </MobileLinksContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterConatiner>
  );
};

export default Footer;
