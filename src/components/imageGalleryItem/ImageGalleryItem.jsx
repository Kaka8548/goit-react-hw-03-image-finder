import { Image, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  handleClick = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { src, alt, bigUrl } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageItem onClick={this.handleClick}>
          <Image src={src} alt={alt} />
        </ImageItem>
        {isModalOpen && (
          <Modal bigUrl={bigUrl} alt={alt} onClick={this.handleClick} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  bigUrl: PropTypes.string.isRequired,
};
