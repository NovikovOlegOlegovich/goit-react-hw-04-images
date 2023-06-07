import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEsc);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEsc);
    document.body.style.overflow = 'visible';
  }

  closeOnEsc = e => {
    if (e.code === 'Escape') {
      this.props.handleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.handleModal();
    }
  };

  modalRoot = document.querySelector('#modal-root');

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImg>
          <img src={this.props.currentImg} alt="" />
        </ModalImg>
      </Overlay>,
      this.modalRoot
    );
  }
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  currentImg: PropTypes.string.isRequired,
};

export default Modal;
