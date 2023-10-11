import { Link } from "react-router-dom";

import { URLS } from "@constants/routesURL";
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

const NotFound = () => {
  return (
    <>
      <Global />
      <ErrorPage>
        <EyesContainer>
          <Eye>
            <Pupil />
          </Eye>
          <Eye>
            <Pupil />
          </Eye>
        </EyesContainer>

        <Title>{TITLE}</Title>
        <Description>{DESCRIPTION}</Description>

        <Link to={URLS.home}>{LINK_TEXT}</Link>
      </ErrorPage>
    </>
  );
};

export default NotFound;
