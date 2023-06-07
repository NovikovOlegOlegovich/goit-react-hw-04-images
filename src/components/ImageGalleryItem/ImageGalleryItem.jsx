import { IMGGalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  handleClickOnImg,
  largeImageURL,
}) => {
  return (
    <IMGGalleryItem onClick={() => handleClickOnImg(largeImageURL)}>
      <img src={webformatURL} alt="" />
    </IMGGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  handleClickOnImg: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
