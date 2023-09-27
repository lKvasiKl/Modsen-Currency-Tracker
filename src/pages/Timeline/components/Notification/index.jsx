import { Component } from "react";
import PropTypes from "prop-types";

import { NotificationContainer } from "./styled";

class Notification extends Component {
  render() {
    const { color, message } = this.props;

    return (
      <NotificationContainer color={color}>{message}</NotificationContainer>
    );
  }
}

Notification.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
