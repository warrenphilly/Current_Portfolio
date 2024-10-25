import Image from "next/image";

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
            Hey Y&apos;all! I&apos;m Warren, a software engineer 
            with a passion for inventing...and a slight obsession to become the closest thing to Tony Stark reality will allow.
          </p>
          <p className="mb-4 text-lg md:text-2xl text-white p-5 ">When I&apos;m not busy trying to convince my computer that it&apos;s
            not smarter than me , I&apos;m on a mission to build the
            coolest and most unnecessarily complex solutions to
            problems you didn&apos;t even know you had...and I build &apos;em pretty too
          </p>
          <p className="mb-4 text-lg md:text-2xl text-white p-5 ">
            I genuinely love writing code. I&apos;ve always enjoyed building (legos are undefeated) but code feels limitless. You can literally build anything. You can turn from an idea living in your brain into a real solution the world has never seen but always needed, used by millions, all by yourself.
            </p><p className="mb-4 text-lg md:text-2xl text-white p-5 "> Programming a rare field, in which you are actually only limited by your imagination. It challenges the mind in ways that are rewarding while providing tangible results that are actual solutions to real world problems, and the best part is, you can do it all by yourself.
          </p>
          <p className="mb-4 text-lg md:text-2xl text-white  px-5">
            
          </p>
        </div>
      </div>

      <div className="bg-[#1B3F59]/70 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-xl md:text-3xl  mb-6 text-lightBlue-200 dark:text-lightBlue-400">
          Why I Code{" "}
        </h2>
        <ul className="list-none space-y-4 mb-6 text-sm md:text-lg text-white dark:text-lightBlue-100">
          {[
            "Its the closest thing to magic, It makes me feel like a wizard in a tower, its the best",
            "To see how far I can push the boundaries of my sanity  ",
            "Because debugging is cheaper than therapy( Results may vary)",
            "Its a superpower, You are only limited by your imagination. I can't seem to find a problem that coding can't solve",
            "In hopes that one day, my code will become sentient and cook for me",
            "To see if I can ( I am an Scientist after all)",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-lightBlue-500 mr-2">▹</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-12  text-lg md:text-xl text-center text-navy-200 mb-12 ">
        So, buckle up,my friends! Together, we&apos;ll build,
        break, fix, and laugh our way through insanity, and maybe make some cool stuff along the way. 🚀✨
     
      </p>
    </div>
  );
}
