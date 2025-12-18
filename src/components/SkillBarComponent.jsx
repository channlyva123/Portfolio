import React from "react";
import { skills } from "@/helpers/skills";
import Rating from "@/animations/Ratting";
import FadeBottom from "@/animations/FadeBotton";

function SkillBarComponent() {
  return (
    <FadeBottom>
      <div className=' cursor-pointer w-full flex flex-col gap-6 mb-12'>
        {skills.map((skill, index) => (
          <Rating key={skill.subject} skill={skill} delay={index * 200} />
        ))}
      </div>
    </FadeBottom>
  );
}

export default SkillBarComponent;
