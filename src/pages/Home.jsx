import HeroSectionComponent from "@/components/sections/HeroSectionComponent";
import SkillSectionCompnent from "@/components/sections/SkillSectionCompnent";
import React from "react";

const Home = () => {
  return (
    <div className=' py-5'>
      <HeroSectionComponent></HeroSectionComponent>
      <hr />
      <SkillSectionCompnent></SkillSectionCompnent>
    </div>
  );
};

export default Home;
