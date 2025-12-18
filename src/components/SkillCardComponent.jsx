import { useState, useEffect } from "react";
import Popup from "@/animations/Popup";
const SkillCardComponent = ({ skill }) => {
  return (
    <Popup delay={200}>
      <div className='max-w-[120px] group shadow-xl border py-2 rounded-md border-gray-200 cursor-pointer'>
        <div className='w-[50%] h-[50%] m-auto flex justify-center items-center'>
          <img
            src={skill.src}
            alt={skill.subject}
            className='w-auto max-h-full transition-transform duration-300 group-hover:scale-110'
          />
        </div>

        <p className='hyphens-auto text-center text-gray-400 py-2'>
          {skill.subject}
        </p>
      </div>
    </Popup>
  );
};

export default SkillCardComponent;
