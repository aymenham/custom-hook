import { useCallback, useState } from "react";
import Button from "../Components/CallBack/Button";
import Count from "../Components/CallBack/Count";
import Title from "../Components/CallBack/Title";

export const CallBackPage = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(500);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 500);
  };

  return (
    <div className="callback">
      <h2>
        useCallback is used to memoize a function so that it is only recreated
        when the dependencies change. <br /> This is useful when passing
        functions as props to child components. <br />
        By using useCallback, the function is only recreated when needed and not
        on every render.
      </h2>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};
