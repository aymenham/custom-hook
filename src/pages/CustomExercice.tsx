import { LegacyRef, useEffect, useRef, useState } from "react";
import Select from "../Components/CustomExercice/Select";
import Tooltip from "../Components/CustomExercice/Tooltip";

export const CustomExercice = () => {
  /*   const [open, setOpen] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []); */
  return (
    <div className="exercice-custom">
      <Tooltip />
      <Select />
    </div>
  );
};
