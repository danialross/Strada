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
      observer = new IntersectionObserver(handleAppear, { threshold: 0.7 });
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
    <Image
      fill
      sizes="100vw"
      src={src}
      alt={alt}
      className={`object-cover md:object-contain animateFade ${isShowingImage ? "opacity-100" : "opacity-0"} ${className} `}
      ref={imageRef}
    />
  );
}
