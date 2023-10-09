import PropTypes from "prop-types";

import close from "@assets/icons/close.svg";

import { CloseButton, Image, ModalWindow, ModalContainer } from "./styled";

const Modal = ({ children, onClose }) => {
  const handleCloseButtonClick = () => {
    onClose();
  };

  return (
    <ModalContainer data-cy="currency-modal">
      <ModalWindow>
        <CloseButton
          data-cy="close-modal-button"
          onClick={handleCloseButtonClick}
        >
          <Image alt="Close icon" height="25px" src={close} width="25px" />
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
