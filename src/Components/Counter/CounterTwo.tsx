import { useState } from "react";

const CounterTwo = () => {
  const [counter, setCounter] = useState<number>(2);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 2);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 2);
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

export default CounterTwo;
