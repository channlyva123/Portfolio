import React from "react";
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

const EducationSectionComponent = () => {
  const educations = [
    {
      time: "2023 - Present",
      school: "SETEC INSTITUTE",
      description: `Currently a fourth-year student, doing a bachelor's degree in
                    Information Technology, majoring in Management Information System
                    (MIS) SETEC INSTITUTE, Phnom Penh Cambodia.`,
    },
    {
      time: "2022 - 2023",
      school: "SETEC INSTITUTE",
      description: `Graduated Associate’s Degree in Information Technology, majoring
                    in Management Information System (MIS) SETEC INSTITUTE, Phnom Penh
                    Cambodia.`,
    },
    {
      time: "2015 - 2021",
      school: "SAMDECH EUV HIGH - SCHOOl",
      description: `I completed my secondary and high school education at Samdech Euv
              High School, where I developed a strong academic foundation and
              essential learning skills.`,
    },
  ];
  return (
    <div>
      <Timeline>
        {educations.map((edu, index) => (
          <TimelineItem key={index}>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>{edu.time}</TimelineTime>
              <TimelineTitle>{edu.school}</TimelineTitle>
              <TimelineBody className=' text-justify'>
                {edu.description}
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default EducationSectionComponent;
