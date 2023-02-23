import { useState } from "react";

const CounterOne = () => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="counter">
      <button onClick={incrementCounter} className="counter-button">
        +
      </button>
      <p className="counter-text">{counter}</p>

      <button onClick={decrementCounter} className="counter-button">
        -
      </button>
    </div>
  );
};

export default CounterOne;
