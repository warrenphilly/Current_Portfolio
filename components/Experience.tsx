import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Senior Frontend Developer',
    description: 'Led a team in developing a complex web application using React and NextJS.'
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    description: 'Worked on various projects using React, TypeScript, and TailwindCSS.'
  },
  {
    year: '2019',
    title: 'Junior Developer',
    description: 'Started my career as a web developer, focusing on HTML, CSS, and JavaScript.'
  },
]

const Experience = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'order-1'}`}>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.year}</span>
                </div>
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience