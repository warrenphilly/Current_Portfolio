"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
    ModalProvider,  // Import ModalProvider
} from "../ui/animated-modal";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";

import { motion } from "framer-motion";

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
        "grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-full ",
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
            "hover:shadow-xl rounded-xl shadow-input dark:shadow-none bg-white/10 backdrop-blur-lg dark:bg-black dark:border-white/[0.2] border border-transparent w-full h-full flex flex-col",
            className
          )}
        >
          <ModalTrigger>
            <CardContainer className="w-full h-full ">
              <CardBody className="w-full h-full flex flex-col justify-between p-4 ">
                <CardItem
                  translateZ="50"
                  className="w-full flex-grow overflow-hidden flex items-center justify-center"
                >
                  <div className="w-full h-full flex items-center justify-center ">
                    {header}
                  </div>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="w-full mt-4"
                >
                  <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 text-xl">
                      {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                      {description}
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </ModalTrigger>
        </div>

        <ModalBody>
          <ModalContent className="w-full h-full max-w-4xl mx-auto bg-transparent overflow-y-auto p-6">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              {title}
            </h4>
            {renderComponent()}
            {!renderComponent() && (
              <>
                <div className="py-4">
                  {header}
                </div>
                <div className="text-neutral-700 dark:text-neutral-300">
                  {description}
                </div>
              </>
            )}
          </ModalContent>
        </ModalBody>
      </ModalProvider>
    );
};
