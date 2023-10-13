import { useMemo } from "react";

import FooterLinks from "./Links";
import MobileLinks from "./MobileLinks";
import { FOOTER_DATA, IMAGE_CONFIG } from "./config";

import {
  FooterContainer,
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

const { title, quote, footerSections, copyright } = FOOTER_DATA;
const FOOTER_LINKS = footerSections.map((section) => (
  <FooterLinks key={section.title} {...section} />
));
const MOBILE_LINKS = footerSections.map((section) => (
  <MobileLinks key={section.title} {...section} />
));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <InfoContainer>
          <Title>
            <Image {...IMAGE_CONFIG} />
            <Text>{title}</Text>
          </Title>
          <Quote>{quote}</Quote>
        </InfoContainer>
        <LinksContainer>{FOOTER_LINKS}</LinksContainer>
        <MobileLinksContainer>{MOBILE_LINKS}</MobileLinksContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterContainer>
  );
};

export default Footer;
