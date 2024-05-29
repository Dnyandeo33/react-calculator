import './Display.css';

const Display = ({ value }) => {
  return (
    <div className="output">
      {/* <div className="prev">{prevValue}</div> */}
      <div className="curr">{value}</div>
    </div>
  );
};

export default Display;
