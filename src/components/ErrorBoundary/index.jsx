import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Global } from "../App/styled";

import { ErrorBoundaryContainer, Error, ErrorTitle, Text } from "./styled";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryContainer>
          <Global />
          <ErrorTitle>An error has occured</ErrorTitle>
          <Error>{error && error.toString()}</Error>
          <Text>{"(╯°□°）╯︵ ┻━┻"}</Text>
          <Link to="/">Go back</Link>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
