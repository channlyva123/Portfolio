import React from "react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
const ExperienceSectionComponent = () => {
  const experiences = [
    {
      subject: "WEB BASE II - SUBJECT",
      project: "STOCK MANAGEMENT SYSTEM",
      description: `Developed Stock Management using PHP, Bootstrap, MVC pattern.  
                    Designed responsive UI layouts for better usability across devices. `,
    },
    {
      subject: "WEB BASE III - SUBJECT",
      project: "NEWS MANAGEMENT SYSTEM",
      description: `News Management System built with Laravel 12 and Tailwind-CSS.  
                    Implemented mobile-friendly, responsive front-end interfaces.   `,
    },
    {
      subject: "SYSTEM ANALYSIS - SUBJECT",
      project: "INVENTORY MANAGEMENT SYSTEM",
      description: `Inventory Management System created using Laravel 12, Breeze  
                    Starter Kit, and Bootstrap. Focused on responsive dashboards and clean front-end.  `,
    },
    {
      subject: "PYTHON PROGRAMMING - SUBJECT",
      project: "ECOMMERCE WEBSITE",
      description: `E-commerce Website Implemented with Flask, Bootstrap, and
                     Vue-JS. Designed a responsive shopping interface, integrated Telegram bot notifications and email checkout alerts.  `,
    },
    {
      subject: "ECOMMERCE - SUBJECT",
      project: "ECOMMERCE WEBSITE",
      description: `E-commerce Midterm Project Developed using React-JS, Redux, and Tailwind CSS with static data.  
                    Built a fully responsive front-end with reusable components.`,
    },
  ];
  return (
    <div>
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className=' text-text bg-bg'>
                {exp.subject}
              </TimelineTime>
              <TimelineTitle className=' text-text bg-bg'>
                {exp.project}
              </TimelineTitle>
              <TimelineBody className=' text-justify text-text bg-bg'>
                {exp.description}
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceSectionComponent;
