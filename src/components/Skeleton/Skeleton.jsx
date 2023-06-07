import PropTypes from 'prop-types';
import { SkeletonMessage } from './Skeleton.styled';

const Skeleton = ({ status }) => {
  if (status === 'rejected') {
    return (
      <SkeletonMessage>No images found for your search query</SkeletonMessage>
    );
  }
};

Skeleton.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Skeleton;
