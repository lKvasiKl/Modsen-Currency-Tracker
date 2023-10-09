import ContactForm from "./ContactForm";
import { CONTACT_INFO, CONTACT_TEXT } from "./config";

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
      <Title>{CONTACT_TEXT.title}</Title>
      <ContactInfoWrapper>
        <ContactForm />
        <InfoContainer>
          <InnerTitle>{CONTACT_TEXT.innerTitle}</InnerTitle>
          <ContactContainer>
            <Text>{CONTACT_TEXT.email}</Text>
            <Link href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </Link>
          </ContactContainer>
          <ContactContainer>
            <Text>{CONTACT_TEXT.phone}</Text>
            <Link href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</Link>
          </ContactContainer>
          <InnerTitle>{CONTACT_TEXT.based}</InnerTitle>
          <Text>{CONTACT_TEXT.address}</Text>
        </InfoContainer>
      </ContactInfoWrapper>
    </Main>
  );
};

export default ContactInfo;
