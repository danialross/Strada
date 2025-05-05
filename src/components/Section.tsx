"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

type SectionProps = {
  header: string;
  src: string;
  alt: string;
  children: ReactNode;
  imagePosition: "left" | "right";
};

export default function Section({
  header,
  src,
  alt,
  children,
  imagePosition,
}: SectionProps) {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const handleInView: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    };

    if (sectionRef.current) {
      observer = new IntersectionObserver(handleInView, { threshold: 0.6 });
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div
      className={
        "relative inset-0 w-full h-[700px] md:h-[500px] lg:h-[400px] overflow-hidden"
      }
      ref={sectionRef}
    >
      <div
        className={`absolute w-full h-full top-0 left-0 animateSlideIn
         bg-primary flex flex-col md:flex-row justify-center items-center 
         ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}
         ${
           imagePosition === "left" && !isInView
             ? "translate-x-full"
             : imagePosition === "right" && !isInView
               ? "-translate-x-full"
               : "translate-x-0"
         }`}
      >
        <div
          className={
            "md:w-1/2  mobilePadding flex flex-col sectionGap justify-center"
          }
        >
          <span className="headerText">{header}</span>
          <span className="bodyText">{children}</span>
        </div>
        <div
          className={
            "relative top-0 right-0 w-full md:w-1/2 h-full overflow-hidden"
          }
        >
          <Image
            src={src}
            alt={alt}
            sizes={"(max-width: 768px) 100vw, 50vw"}
            fill
            className={"object-cover"}
          />
        </div>
      </div>
    </div>
  );
}
