import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@constants/routes";
import { Global } from "@styled";
import { DESCRIPTION, LINK_TEXT, TITLE } from "./config";

import {
  ErrorPage,
  Eye,
  EyesContainer,
  Pupil,
  Title,
  Description,
} from "./styled";

const EYES = Array.from({ length: 2 }, (_, index) => (
  <Eye key={index}>
    <Pupil />
  </Eye>
));

const NotFound = React.memo(() => {
  return (
    <>
      <Global />
      <ErrorPage>
        <EyesContainer>{EYES}</EyesContainer>
        <Title>{TITLE}</Title>
        <Description>{DESCRIPTION}</Description>
        <Link to={ROUTES.home}>{LINK_TEXT}</Link>
      </ErrorPage>
    </>
  );
});

export default NotFound;
