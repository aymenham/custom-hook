import CounterOne from "../Components/Counter/CounterOne";
import CounterTwo from "../Components/Counter/CounterTwo";
import CounterWithHook from "../Components/Counter/CounterWithHook";

export const Counter = () => {
  return (
    <div className="hooks">
      <h1 className="big-title">custom Hook</h1>
      <h3 className="second-title">counter sans custom hook </h3>
      <CounterOne />
      <CounterTwo />
      <h3 className="second-title">counter avec custom hook </h3>
      <CounterWithHook />
    </div>
  );
};
