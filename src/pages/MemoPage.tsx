import { useMemo, useState } from "react";

export const MemoPage = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne((preValue) => preValue + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo((preValue) => preValue + 1);
  };

  return (
    <div className="memo">
      <h2>
        useMemo is used to memoize a value so that it is only recalculated when
        the dependencies change. <br />
        This is useful when a function or expression is expensive to compute and
        is used in a component. <br /> By using useMemo, the value is only
        calculated when needed and not on every render.
      </h2>
      <button onClick={incrementCounterOne}>counter one {counterOne}</button>
      <p>ici pour checker si le nombre est paire ou impaire </p>
      <button onClick={incrementCounterTwo}>counter two {counterTwo}</button>
    </div>
  );
};
