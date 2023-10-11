import { useRef } from "react";
import PropTypes from "prop-types";

import close from "@assets/icons/close.svg";
import useClickOutside from "@hooks/useClickOutside";
import { IMAGE_SIZE } from "@constants/styles/image";

import { CloseButton, Image, ModalWindow, ModalContainer } from "./styled";

const Modal = ({ children, onClose }) => {
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
          <Image alt="Close icon" src={close} {...IMAGE_SIZE.S} />
        </CloseButton>
        {children}
      </ModalWindow>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
