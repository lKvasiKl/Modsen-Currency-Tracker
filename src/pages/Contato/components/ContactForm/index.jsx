import PropTypes from "prop-types";

import { Button, Form, Input, InputContainer, Label } from "./styled";

const FormField = ({ label, type }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputContainer>
        <Input type={type} />
      </InputContainer>
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const ContactForm = () => {
  return (
    <Form>
      <FormField label="Full Name" />
      <FormField label="E-mail" type="Email" />
      <FormField label="Message" />
      <Button>Contact Us</Button>
    </Form>
  );
};

export default ContactForm;
