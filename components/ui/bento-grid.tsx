"use client";

import { cn } from "@/lib/utils";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import {
   
    ModalBody,
    ModalContent,
   
    ModalTrigger,
    ModalProvider,  // Import ModalProvider
} from "../ui/animated-modal";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
  }) => {
    const renderComponent = () => {
      if (typeof title !== 'string') return null;
      
      switch (title.toLowerCase()) {
        case 'contact':
        case 'get in touch':
          return <Contact />;
        case 'about us':
        case 'about me':
          return <About />;
        case 'projects':
        case 'my projects':
          return <Projects />;
        case 'skills':
        case 'my skills':
          return <Skills />;
        case 'experience':
        case 'my experience':
          return <Experience />;
        default:
          return null;
      }
    };
  
    return (
      <ModalProvider>
        <div
          className={cn(
            "hover:shadow-xl rounded-xl shadow-input dark:shadow-none bg-[#8ad0ff]/10 backdrop-blur-2xl   w-full h-full flex flex-col",
            className
          )}
        >
          <ModalTrigger>
            <CardContainer className="w-full h-full ">
              <CardBody className="w-full h-full flex flex-col justify-between p-3 sm:p-4 ">
                <CardItem
                  translateZ="50"
                  className="w-full flex-grow overflow-hidden flex items-center justify-center"
                >
                  <div className="w-full h-full  flex items-center justify-center ">
                    {header}
                  </div>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="w-full mt-2 sm:mt-4"
                >
                  <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-sans font-bold text-lightBlue-300 dark:text-neutral-200 mb-1 sm:mb-2 text-lg sm:text-xl">
                      {title}
                    </div>
                    <div className="font-sans font-normal text-lightBlue-600 text-xs sm:text-sm dark:text-neutral-300">
                      {description}
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </ModalTrigger>
        </div>

        <ModalBody className="h-screen fixed  mx-auto bg-[#1C2934]/90 overflow-hidden  backdrop-blur-2xl rounded-lg flex-1 w-full items-center justify-center  min-h-[6rem]  flex-col  ">
          <ModalContent className="w-full h-full max-w-[1400px] mx-auto bg-transparent overflow-y-auto p-4 sm:p-6 ">
            <h4 className="text-xl sm:text-2xl  rounded-full p-2 sm:p-3 px-4 sm:px-5  text-lightBlue-300 w-fit    bg font-bold text-center mb-4 sm:mb-8">
              {title}
            </h4>
            {renderComponent()}
            {!renderComponent() && (
              <>
                <div className="py-2 sm:py-4">
                  {header}
                </div>
                <div className="text-lightBlue-300 text-sm sm:text-base">
                  {description}
                </div>
              </>
            )}
          </ModalContent>
        </ModalBody>
      </ModalProvider>
    );
};
