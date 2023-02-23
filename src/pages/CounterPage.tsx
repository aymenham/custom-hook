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
      <h3>
        In React, a custom hook is a reusable function that allows you to
        encapsulate logic and state that can be shared across multiple
        components. <br />
        Custom hooks are just like regular hooks provided by React, but they are
        created by the developers themselves to suit their specific use cases.
        <br />
        Custom hooks allow you to separate the concerns of your application into
        smaller, reusable units.{" "}
      </h3>
      <CounterWithHook />
    </div>
  );
};
