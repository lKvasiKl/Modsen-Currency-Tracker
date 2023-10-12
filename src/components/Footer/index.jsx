import { useMemo } from "react";

import FooterLinks from "./Links";
import MobileLinks from "./MobileLinks";
import { FOOTER_DATA, IMAGE_CONFIG } from "./config";

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

const { title, quote, footerSections, copyright } = FOOTER_DATA;

const Footer = () => {
  const footerLinks = useMemo(() => {
    return footerSections.map((section) => (
      <FooterLinks key={section.title} {...section} />
    ));
  }, [footerSections]);

  const mobileLinks = useMemo(() => {
    return footerSections.map((section) => (
      <MobileLinks key={section.title} {...section} />
    ));
  }, [footerSections]);

  return (
    <FooterConatiner>
      <FooterWrapper>
        <InfoContainer>
          <Title>
            <Image {...IMAGE_CONFIG} />
            <Text>{title}</Text>
          </Title>
          <Quote>{quote}</Quote>
        </InfoContainer>
        <LinksContainer>{footerLinks}</LinksContainer>
        <MobileLinksContainer>{mobileLinks}</MobileLinksContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterConatiner>
  );
};

export default Footer;
