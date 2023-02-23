import { useState } from "react";

const CounterWithHook = () => {
  const [counter, setCounter] = useState<number>(10);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 10);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 10);
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

export default CounterWithHook;
