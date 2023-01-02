import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <ImageList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          bigUrl={image.largeImageURL}
        />
      ))}
    </ImageList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
