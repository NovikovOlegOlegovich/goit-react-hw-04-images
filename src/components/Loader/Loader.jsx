import PropTypes from 'prop-types';
import { Spiner, Circle } from './Loader.styled';

const Loader = ({ status }) => {
  if (status === 'pending') {
    return (
      <Spiner viewBox="0 0 50 50">
        <Circle cx="25" cy="25" r="20" fill="none" stroke-width="20"></Circle>
      </Spiner>
    );
  }
};

Loader.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Loader;
