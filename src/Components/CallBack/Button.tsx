import { PropsWithChildren } from "react";

type Props = {
  handleClick: () => void;
};

const Button = ({ handleClick, children }: PropsWithChildren<Props>) => {
  console.log("Rendering button - ", children);

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
