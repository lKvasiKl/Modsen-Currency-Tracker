import React, { useRef } from "react";
import PropTypes from "prop-types";

import useClickOutside from "@hooks/useClickOutside";
import { IMAGE_CONFIG } from "./config";

import { CloseButton, Image, ModalWindow, ModalContainer } from "./styled";

const Modal = React.memo(({ children, onClose }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, onClose);

  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <ModalContainer data-cy="currency-modal">
      <ModalWindow ref={modalRef}>
        <CloseButton
          data-cy="close-modal-button"
          onClick={handleCloseButtonClick}
        >
          <Image {...IMAGE_CONFIG} />
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalContainer>
  );
});

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
