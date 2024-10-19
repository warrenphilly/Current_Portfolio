import EnhancedTimeline from "./EnhancedTimeline";
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
          <p className="mb-4 text-2xl text-lightBlue-300 p-5 ">
            Greetings, fellow humans and AI overlords! I'm Warren Phillips, a 23-year-old software engineer with a 
            passion for turning caffeine into code and dreams into digital reality.
          </p>
          <p className="mb-4 text-2xl text-lightBlue-300  px-5">
            When I'm not busy trying to convince my computer that it's not smarter than me (yet), I'm on a mission 
            to build the coolest, quirkiest, and most unnecessarily complex solutions to problems you didn't even 
            know you had!
          </p>
        </div>
      </div>
      
      <div className="bg-[#1B3F59]/70 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-3xl  mb-6 text-lightBlue-200 dark:text-lightBlue-400">Why I Code (Besides World Domination)</h2>
        <ul className="list-none space-y-4 mb-6 text-lg text-darkBlue-300 dark:text-lightBlue-100">
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
      
      <blockquote className="mb-12 text-xl italic text-center text-lightBlue-600 ">
        "In the face of ambiguity, refuse the temptation to guess. There should be one-- and preferably only one 
        --obvious way to do it. Although that way may not be obvious at first unless you're Dutch."
        <footer className="text-right text-lightBlue-300 mt-2">- The Zen of Python</footer>
      </blockquote>

      
      <p className="mt-12 text-xl text-center text-navy-200 ">
        So, buckle up, fellow code enthusiasts! Together, we'll build, break, fix, and laugh our way through 
        the digital frontier. Let's make some software magic! 🚀✨
      </p>
    </div>
  );
}
