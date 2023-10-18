import React from "react";
import PropTypes from "prop-types";

import usePortal from "@hooks/usePortal";
import Notification from "../Notification";
import { NOTIFICATION_PORTAL_ID } from "./config";

const NotificationPortalContainer = React.memo(
  ({ showNotification, notification }) => {
    const notificationPortal = usePortal(NOTIFICATION_PORTAL_ID);

    return (
      <>
        {showNotification &&
          notificationPortal(
            <Notification
              color={notification.backgroundColor}
              message={notification.message}
            />,
          )}
      </>
    );
  },
);

NotificationPortalContainer.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  notification: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotificationPortalContainer;
