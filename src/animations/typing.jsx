import { useEffect, useState } from "react";

const Typing = ({
  text = "", // ✅ default must be an array
  typingSpeed = 100,
  deletingSpeed = 60,
  delay = 1500,
  className = "",
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!text.length) return null; // guard

  useEffect(() => {
    const currentText = text;
    let timer;

    if (!isDeleting && charIndex < currentText.length) {
      timer = setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex((prev) => prev - 1), deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % text.length);
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    textIndex,
    text,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return (
    <span className={`inline-flex items-center w-full h-full ${className}`}>
      {text.substring(0, charIndex)}
      <span className='ml-1 animate-pulse'>|</span>
    </span>
  );
};

export default Typing;
