import { ButtonLoadeMore } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ handleClick, children }) => {
  return (
    <ButtonLoadeMore type="button" onClick={handleClick}>
      {children}
    </ButtonLoadeMore>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
