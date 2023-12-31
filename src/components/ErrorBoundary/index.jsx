import React from "react";
import PropTypes from "prop-types";

import { Global } from "@styled";
import { ERROR_TEXT, ERROR_TITLE } from "./config";

import { ErrorBoundaryContainer, Error, ErrorTitle, Text } from "./styled";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryContainer>
          <Global />
          <ErrorTitle>{ERROR_TITLE}</ErrorTitle>
          <Error>{error && error.toString()}</Error>
          <Text>{ERROR_TEXT}</Text>
          <Text>{errorInfo && errorInfo.componentStack}</Text>
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
