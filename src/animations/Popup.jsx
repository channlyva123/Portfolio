import { useEffect, useState } from "react";

const Popup = ({ children, delay = 0 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-75"}
      `}
    >
      {children}
    </div>
  );
};

export default Popup;
