import PropTypes from 'prop-types';
import { IMGGallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ status, images, handlSetCurrentImg }) => {
  if (status === 'resolved')
    return (
      <IMGGallery>
        {images.map(({ webformatURL, id, largeImageURL }) => (
          <ImageGalleryItem
            largeImageURL={largeImageURL}
            handleClickOnImg={handlSetCurrentImg}
            webformatURL={webformatURL}
            key={id}
          />
        ))}
      </IMGGallery>
    );
};

ImageGallery.propTypes = {
  status: PropTypes.string.isRequired,
  handlSetCurrentImg: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
