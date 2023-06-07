import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

const Modal = ({ handleModal, currentImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', this.closeOnEsc);
    document.body.style.overflow = 'hidden';
    return (
      window.removeEventListener('keydown', this.closeOnEsc),
      (document.body.style.overflow = 'visible')
    );
  }, []);

  const closeOnEsc = e => {
    if (e.code === 'Escape') {
      handleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleModal();
    }
  };

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <img src={currentImg} alt="" />
      </ModalImg>
    </Overlay>,
    this.modalRoot
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
};

export default Modal;