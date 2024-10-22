
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12  rounded-xl ">
      
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="relative w-64 h-64 mb-8 md:mb-0 md:mr-12">
          <Image
            src="/assets/images/avatarPeaceful.png"
            alt="Warren Phillips in his natural habitat"
            layout="fill"
            objectFit="cover"
           className="bg-lightBlue-900 rounded-2xl shadow-xl h-full w-full"
          />
        </div>
        <div className="flex-1  bg-[#1B3F59]/40 rounded-2xl p-5 shadow-2xl">
          <p className="mb-4 text-lg md:text-2xl text-white p-5 ">
            Hey Y&apos;all I&apos;m Warren, a 23-year-old software engineer with a 
            passion for turning caffeine into code and dreams into digital reality.
          </p>
          <p className="mb-4 text-lg md:text-2xl text-white  px-5">
            When I&apos;m not busy trying to convince my computer that it&apos;s not smarter than me (yet), I&apos;m on a mission 
            to build the coolest, quirkiest, and most unnecessarily complex solutions to problems you didn&apos;t even 
            know you had!
          </p>
        </div>
      </div>
      
      <div className="bg-[#1B3F59]/70 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-xl md:text-3xl  mb-6 text-lightBlue-200 dark:text-lightBlue-400">Why I Code (Besides World Domination)</h2>
        <ul className="list-none space-y-4 mb-6 text-sm md:text-lg text-white dark:text-lightBlue-100">
          {[
            "To see how far I can push the boundaries of sanity and syntax",
            "Because debugging is cheaper than therapy",
            "because its fun (duh)",
            "In hopes that one day, my code will become sentient and cook for me"
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-lightBlue-500 mr-2">▹</span> {item}
            </li>
          ))}
        </ul>
      </div>
      
 

      
      <p className="mt-12  text-lg md:text-xl text-center text-navy-200 mb-12 ">
        So, buckle up, fellow code enthusiasts! Together, we&apos;ll build, break, fix, and laugh our way through 
        the digital frontier. Let&apos;s make some software magic! 🚀✨
      </p>
    </div>
  );
}
