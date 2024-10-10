import { useRef } from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Remove these lines:
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function Projects() {
  const sliderRef = useRef<Slider>(null);

  const projects: Project[] = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      image: '/assets/images/riftyProject.png',
      link: '/projects/1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      image: '/path/to/image2.jpg',
      link: '/projects/2',
    },
    // Add more projects...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md"
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md"
          onClick={handleNext}
          aria-label="Next project"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}