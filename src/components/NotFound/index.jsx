import { Link } from "react-router-dom";

import { Global } from "../../styled";

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

        <Title>Looks Like You&apos;re Lost</Title>
        <Description>404 Error</Description>

        <Link to="/">Back To Home</Link>
      </ErrorPage>
    </>
  );
};

export default NotFound;