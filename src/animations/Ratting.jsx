import { useEffect, useState } from "react";

const Rating = ({ skill, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.percent);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.percent, delay]);

  return (
    <div className='flex items-center gap-4'>
      <span className='w-32 font-medium'>{skill.subject}</span>

      <div className='flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden'>
        <div
          className='h-full bg-primary transition-all duration-1000 ease-out'
          style={{ width: `${width}%` }}
        />
      </div>

      <span className='text-sm font-semibold text-gray-600'>
        {skill.percent}%
      </span>
    </div>
  );
};

export default Rating;
