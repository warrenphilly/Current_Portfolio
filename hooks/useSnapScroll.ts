import { useEffect, useState, RefObject } from "react";

export const useSnapScroll = (containerRef: RefObject<HTMLElement>) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollPosition / windowHeight);
      setCurrentSection(newSection);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      const scrollAmount = window.innerHeight;
      container.scrollBy({
        top: delta > 0 ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [containerRef]);

  return { currentSection };
};