import PropTypes from 'prop-types';
import Button from './Button';
import './Row.css';

const Row = ({ row, handleClick }) => {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Button
          key={index}
          name={cell}
          value={cell}
          onClick={() => handleClick(cell)}
        />
      ))}
    </div>
  );
};

Row.propTypes = {
  row: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Row;
