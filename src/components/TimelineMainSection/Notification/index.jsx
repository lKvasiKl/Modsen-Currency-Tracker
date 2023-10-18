import { PureComponent } from "react";
import PropTypes from "prop-types";

import { NotificationContainer } from "./styled";

class Notification extends PureComponent {
  render() {
    const { color, message } = this.props;

    return (
      <NotificationContainer color={color} data-cy="notification">
        {message}
      </NotificationContainer>
    );
  }
}

Notification.propTypes = {
  color: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
