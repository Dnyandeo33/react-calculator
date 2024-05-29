import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ value, name, onClick }) => {
  return (
    <button className={name} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
