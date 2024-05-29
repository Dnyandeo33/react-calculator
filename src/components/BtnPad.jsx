import PropTypes from 'prop-types';
import './BtnPad.css';
import Row from './Row';

const BtnPad = ({ handleClick }) => {
  const btnText = [
    ['AC', 'C', 'D', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['0', '00', '.', '='],
  ];

  return (
    <div className="btn-pad">
      {btnText.map((row, i) => (
        <Row key={i} row={row} handleClick={handleClick} />
      ))}
    </div>
  );
};

BtnPad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BtnPad;
