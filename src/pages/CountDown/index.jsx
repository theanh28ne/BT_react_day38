import { useEffect, useState } from "react";

const CountDown = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const cd = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(cd);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(cd);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Count is {count}</h2>
      <button className="border-2 p-1" onClick={() => setCount(10)}>
        reset
      </button>
    </div>
  );
};

export default CountDown;
