
import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <div className="py-16 bg-navy-900/70 backdrop-blur-lg text-blue-100 rounded-xl shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">My Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-400 opacity-20" />
          
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.type];
            return (
              <motion.div
                key={index}
                className={`mb-12 flex justify-between items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                  <motion.div
                    className="bg-navy-800 p-6 rounded-lg shadow-lg border border-blue-500"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-300">{item.title}</h3>
                    <h4 className="text-lg mb-2 text-blue-400">{item.organization}</h4>
                    <p className="text-sm mb-4 text-blue-200">{item.period}</p>
                    <ul className="list-disc list-inside text-sm">
                      {item.description.map((desc, i) => (
                        <li key={i} className="mb-1 text-blue-100">{desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                </div>
                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnhancedTimeline;