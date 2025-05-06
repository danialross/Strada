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
    const ref = imageRef.current;
    if (!ref) return;

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

    const observer = new IntersectionObserver(handleAppear, { threshold: 0.7 });
    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [animationDelay]);

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
