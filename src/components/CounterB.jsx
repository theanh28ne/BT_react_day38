import { memo } from "react";
import PropTypes from "prop-types";
const CounterB = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Count B is {value}</h2>
      <button className="border-2 p-1" onClick={onIncrease}>
        Increase Count B
      </button>
    </div>
  );
});

CounterB.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default CounterB;
