import PropTypes from "prop-types";
import { memo } from "react";

const CounterA = memo(({ value, onIncrease }) => {
  return (
    <div>
      <h2>Count A is {value}</h2>
      <button className="border-2 p-1" onClick={onIncrease}>
        Increase Count A
      </button>
    </div>
  );
});

CounterA.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
};

export default CounterA;
