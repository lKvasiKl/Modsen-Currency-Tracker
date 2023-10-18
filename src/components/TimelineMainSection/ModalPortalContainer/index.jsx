import React from "react";
import PropTypes from "prop-types";

import usePortal from "@hooks/usePortal";
import CurrencyInputModal from "../CurrencyInputModal";

const ModalPortalContainer = React.memo(
  ({ isModalOpen, selectedCurrency, handleAddPrice, handleCloseModal }) => {
    const modalPortal = usePortal();

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
      </>
    );
  },
);

ModalPortalContainer.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  selectedCurrency: PropTypes.object.isRequired,
  handleAddPrice: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

export default ModalPortalContainer;
