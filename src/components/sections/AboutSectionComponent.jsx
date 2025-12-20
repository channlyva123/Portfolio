import React from "react";
import profile from "/images/profile1.png";
import Social from "@/components/sections/SocialSectionComponen.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { TabItem, Tabs } from "flowbite-react";
import { IoPerson } from "react-icons/io5";
import { MdLocationOn, MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { TbSettingsCog } from "react-icons/tb";
import SkillBarComponent from "../SkillBarComponent";
import { skills } from "@/helpers/skills";
import SkillCardComponent from "../SkillCardComponent";
import EducationSectionComponent from "./EducationSectionComponent";
import ExperienceSectionComponent from "./ExperienceSectionComponent";
import FadeLeft from "@/animations/FadeLeft";
import FadeBottom from "@/animations/FadeBotton";
import Popup from "@/animations/Popup";

const AboutSectionsComponent = () => {
  const contactInfo = [
    {
      icon: <IoPerson className='font-bold text-text' />,
      label: "Name",
      value: "Va Channly",
    },
    {
      icon: <FaPhoneAlt className='font-bold text-text' />,
      label: "Phone",
      value: "096 82 81 534",
    },
    {
      icon: <MdOutlineAlternateEmail className='font-bold text-text' />,
      label: "Email",
      value: "channlyva@gmail.com",
    },
    {
      icon: <MdLocationOn className='font-bold text-text' />,
      label: "Address",
      value: "St. Betong, Sangkat Tuek Thla, Khan Sen Sok, Phnom Penh.",
    },
  ];
  return (
    <section className='container min-h-screen bg-bg text-text  p-4 px-6'>
      <Popup delay={200}>
        <h1 className=' text-center py-2 text-5xl text-primary font-bold mb-3'>
          About Me
        </h1>
      </Popup>

      <div className='flex flex-col md:py-16 py-3 lg:flex-row items-center  justify-between gap-8 lg:gap-12 xl:gap-16'>
        {/* Image */}
        <FadeLeft delay={200}>
          <div className='flex-1 flex justify-center lg:justify-end relative'>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500'></div>
              <div className='relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl'>
                <img
                  src={profile}
                  alt='Va Channly - Front-End Developer'
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              {/* Decorative elements */}
              <div className='absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary/20 animate-pulse'></div>
              <div className='absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 animate-pulse delay-300'></div>
            </div>
          </div>
        </FadeLeft>

        {/* Title */}
        <div className=' w-full'>
          <FadeBottom delay={200}>
            <p className=' text-xl mb-2 text-primary'>My Informations</p>
          </FadeBottom>
          <FadeBottom delay={300}>
            {/* description */}
            <p className=' text-justify py-2 mb-2 md:mb-5'>
              I am a Front-End Developer who is always eager to learn new
              technologies and improve my skills. I am committed to contributing
              to the company’s growth while performing my responsibilities with
              dedication and respect for my team.
            </p>
          </FadeBottom>
          <FadeBottom delay={400}>
            <div className='w-full'>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center w-full mb-2'
                >
                  <div className='flex flex-row items-center w-48 gap-4'>
                    {item.icon}
                    <span>{item.label} :</span>
                  </div>
                  <div className='ml-6 w-full'>
                    <span className='text-start md:text-justify'>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeBottom>
          <FadeBottom delay={500}>
            <Social></Social>
          </FadeBottom>

          {/* socials */}
        </div>
      </div>
      <Tabs variant='underline'>
        <TabItem title='Skills' icon={RiUserSettingsFill}>
          {/* Skill Bars */}
          <div className='px-4 md:px-6'>
            <SkillBarComponent />
          </div>

          {/* Skill Cards */}
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-6 my-10'>
            {skills.map((skill, index) => (
              <SkillCardComponent skill={skill} key={index} />
            ))}
          </div>
        </TabItem>

        <TabItem title='Educations' icon={MdOutlineCastForEducation}>
          <div className='px-4 md:px-6'>
            <EducationSectionComponent />
          </div>
        </TabItem>

        <TabItem title='Experiences' icon={TbSettingsCog}>
          <div className='px-4 md:px-6'>
            <ExperienceSectionComponent />
          </div>
        </TabItem>
      </Tabs>
    </section>
  );
};

export default AboutSectionsComponent;
