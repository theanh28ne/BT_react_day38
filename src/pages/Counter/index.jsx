import { useCallback, useState } from "react";
import CounterA from "../../components/CounterA";
import CounterB from "../../components/CounterB";

const Counter = () => {
  const [coutA, setCoutA] = useState(0);
  const [coutB, setCoutB] = useState(0);

  const handleClickA = useCallback(() => {
    setCoutA((pre) => pre + 1);
  }, []);

  const handleClickB = useCallback(() => {
    setCoutB((pre) => pre + 1);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <CounterA onIncrease={handleClickA} value={coutA} />
      <CounterB onIncrease={handleClickB} value={coutB} />
    </div>
  );
};

export default Counter;
