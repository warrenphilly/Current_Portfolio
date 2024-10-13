import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
      <img src={project.image} alt={project.title} className="w-fit h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
        </div>
        <Link 
          href={project.link}
          className="bg-warm-500 hover:bg-warm-700 text-white font-bold py-2 px-4 rounded text-center transition duration-300 ease-in-out"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}