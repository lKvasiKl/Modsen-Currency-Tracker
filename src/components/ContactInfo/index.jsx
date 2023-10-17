import ContactForm from "./ContactForm";
import { CONTACT_INFO } from "./config";

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
  const {
    title,
    innerTitle,
    emailText,
    emailAddress,
    phoneText,
    phoneNumber,
    based,
    address,
  } = CONTACT_INFO;

  return (
    <Main>
      <Title>{title}</Title>
      <ContactInfoWrapper>
        <ContactForm />
        <InfoContainer>
          <InnerTitle>{innerTitle}</InnerTitle>
          <ContactContainer>
            <Text>{emailText}</Text>
            <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
          </ContactContainer>
          <ContactContainer>
            <Text>{phoneText}</Text>
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </ContactContainer>
          <InnerTitle>{based}</InnerTitle>
          <Text>{address}</Text>
        </InfoContainer>
      </ContactInfoWrapper>
    </Main>
  );
};

export default ContactInfo;
