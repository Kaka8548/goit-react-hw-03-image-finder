import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const modalElement = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.closeModal);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.closeModal);
  };

  closeModal = () => {
    this.props.onClick();
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { bigUrl, alt } = this.props;

    return createPortal(
      <Overlay onClick={this.handleClick}>
        <ModalWindow className="Modal">
          <img src={bigUrl} alt={alt} />
        </ModalWindow>
      </Overlay>,
      modalElement
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  bigUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
