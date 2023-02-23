import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Tooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const ref = useRef<HTMLInputElement>(null);

     useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      setShowTooltip(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []); 

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="tooltip">
      <button onClick={handleClick}>Show text </button>
      {showTooltip && (
        <div ref={ref} style={{ border: "1px solid black", padding: "10px" }}>
          <p>Hello World!</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
