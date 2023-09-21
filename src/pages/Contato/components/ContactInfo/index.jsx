import ContactForm from "../ContactForm";

import {
  ContactInfoWrapper,
  Main,
  Title,
  InfoContainer,
  InnerTitle,
  ContactContainer,
  Link,
  Text,
} from "./styled";

const ContactInfo = () => {
  return (
    <Main>
      <Title>Contact us</Title>
      <ContactInfoWrapper>
        <ContactForm />
        <InfoContainer>
          <InnerTitle>Contact</InnerTitle>
          <ContactContainer>
            <Text>Email:</Text>
            <Link href="mailto:contact@modsen-software.com">
              contact@modsen-software.com
            </Link>
          </ContactContainer>
          <ContactContainer>
            <Text>Phone:</Text>
            <Link href="tel:+48501157180">+48501157180</Link>
          </ContactContainer>
          <InnerTitle>Based in</InnerTitle>
          <Text>Stefana Okrzei 1a/10 Warsaw, Poland</Text>
        </InfoContainer>
      </ContactInfoWrapper>
    </Main>
  );
};

export default ContactInfo;
