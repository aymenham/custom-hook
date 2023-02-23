import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

   useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []); 

  return (
    <div className="select">
      <button onClick={() => setIsOpen(!isOpen)}> select an item </button>
      {isOpen && (
        <ul ref={ref}>
          <li value="item1">Item 1</li>
          <li value="item2">Item 2</li>
          <li value="item3">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default Select;
