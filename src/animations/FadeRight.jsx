import { useEffect, useState } from "react";

const FadeRight = ({ children, delay = 0 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
      `}
    >
      {children}
    </div>
  );
};

export default FadeRight;
