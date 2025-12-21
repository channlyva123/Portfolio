import React from "react";

import { skills } from "@/helpers/skills";
import SkillCardComponent from "../SkillCardComponent";
import SkillBarComponent from "../SkillBarComponent";
import Popup from "@/animations/Popup";

const SkillSectionComponent = () => {
  return (
    <>
      <section className=' container min-w-full min-h-screen bg-bg text-text p-4 md:px-6'>
        <Popup delay={200}>
          <h1 className=' cursor-pointer text-2xl md:text-4xl text-center font-bold text-primary mb-10'>
            Skills
          </h1>
        </Popup>

        {/* Skill Rating */}
        <div className=' w-full'>
          <SkillBarComponent></SkillBarComponent>
        </div>
        {/* Skill Cards */}
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-6 my-10'>
          {skills.map((skill, index) => (
            <SkillCardComponent skill={skill} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillSectionComponent;
