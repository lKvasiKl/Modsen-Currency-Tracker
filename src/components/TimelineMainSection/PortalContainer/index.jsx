import PropTypes from "prop-types";

import usePortal from "@hooks/usePortal";
import CurrencyInputModal from "../CurrencyInputModal";
import Notification from "../Notification";
import { NOTIFICATION_PORTAL_ID } from "./config";

function PortalContainer({
  isModalOpen,
  selectedCurrency,
  handleAddPrice,
  handleCloseModal,
  showNotification,
  notification,
}) {
  const modalPortal = usePortal();
  const notificationPortal = usePortal(NOTIFICATION_PORTAL_ID);

  return (
    <>
      {isModalOpen &&
        modalPortal(
          <CurrencyInputModal
            id={selectedCurrency.id}
            onAddPrice={handleAddPrice}
            onClose={handleCloseModal}
          />,
        )}
      {showNotification &&
        notificationPortal(
          <Notification
            color={notification.backgroundColor}
            message={notification.message}
          />,
        )}
    </>
  );
}

PortalContainer.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
  handleAddPrice: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  showNotification: PropTypes.bool.isRequired,
  notification: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortalContainer;
