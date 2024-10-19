import React from 'react';
import Image from "next/image";
import { Timeline } from './ui/timeline';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

interface TimelineItem {
  type: 'education' | 'work' | 'internship';
  title: string;
  organization: string;
  period: string;
  description: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    title: 'Fullstack Developer',
    organization: 'Pavo Digital',
    period: 'May 2023 – Feb 2024',
    description: [
      'Developed AI cloud web app using Remix, ReactJS, TypeScript, and AWS',
      'Integrated Keras machine learning model with Tensorflow JS',
      'Implemented AWS storage and optimized backend APIs',
      'Designed and enhanced UI for project history and file management',
      'Conducted weekly meetings and user studies'
    ]
  },
  {
    type: 'work',
    title: 'Software Engineer',
    organization: 'IMDC Labs',
    period: 'Sep 2022 – Apr 2023',
    description: [
      'Developed Zoom-based application with ReactJS and ZoomSDK',
      'Enhanced NodeJs server APIs for IoT interfacing',
      'Worked on network protocols for hybrid learning platform'
    ]
  },
  {
    type: 'internship',
    title: 'Software Engineer, Intern',
    organization: 'CIBC',
    period: 'Jan 2019 – Aug 2019',
    description: [
      'Developed client-side interfaces for P2P transactions',
      'Led UI/UX design for accessible front-end interfaces',
      'Built educational web platform for internal onboarding',
      'Contributed to daily standups and CI/CD practices'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Toronto Metropolitan University',
    period: 'Aug 2019 – June 2023',
    description: ['Honours degree']
  },
];

const iconMap = {
  education: FaGraduationCap,
  work: FaBriefcase,
  internship: FaCode
};

export const EnhancedTimeline: React.FC = () => {
  const formattedData = timelineData.map((item) => ({
    title: item.period,
    content: (
      <div>
        <p className="text-lightBlue-300 text-xs md:text-4xl font-normal mb-4 ">
          {item.title} at {item.organization}      </p>
        <div className='flex justify-start lg:items-center gap-2 w-fit bg-navy-900 px-5 rounded-full text-lightBlue-500 mb-5'>
        {React.createElement(iconMap[item.type], { className: "text-blue-500 text-xl" })}
        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
   
        </div>
        <div className="mb-8">
          {item.description.map((desc, index) => (
            <div key={index} className="flex gap-2 items-center text-lightBlue-200 text-lg lg:text-xl">
              <span className="text-lightBlue-500 mr-2">▹</span> {desc}
            </div>
          ))}
        </div>
       
      </div>
    ),
  }));

  return (
    <div className="  text-blue-100 rounded-xl ">
      <div className="container mx-auto px-4">
     
        <Timeline data={formattedData} />
      </div>
    </div>
  );
};

export default EnhancedTimeline;
