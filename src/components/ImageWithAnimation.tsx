"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageWithAnimationProps = {
  src: string;
  alt: string;
  animationDelay: number; // in miliseconds
  className?: string;
};

export default function ImageWithAnimation({
  src,
  alt,
  animationDelay = 0,
  className = "",
}: ImageWithAnimationProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isShowingImage, setIsShowingImage] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver;
    let timeout: NodeJS.Timeout;

    const handleAppear: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => {
            setIsShowingImage(true);
          }, animationDelay);
        }
      });
    };

    if (imageRef.current) {
      observer = new IntersectionObserver(handleAppear, { threshold: 0.2 });
      observer.observe(imageRef.current as HTMLImageElement);
    }

    return () => {
      if (imageRef.current && observer) {
        observer.unobserve(imageRef.current);
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div
      className={`w-full animateFade ${isShowingImage ? "opacity-100" : "opacity-0"} ${className}`}
      key={src}
    >
      <Image
        width={1920}
        height={1080}
        src={src}
        alt={alt}
        className={" object-cover md:object-contain"}
        ref={imageRef}
      />
    </div>
  );
}
