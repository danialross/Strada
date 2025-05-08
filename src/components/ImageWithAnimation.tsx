"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getAnimationDelay } from "@/util";

type ImageWithAnimationProps = {
  src: string;
  alt: string;
  className?: string;
  animationDelayOnWeb: number;
  animationDelayOnMobile: number;
  hasIntroAnimationOnWeb: boolean;
  hasIntroAnimationOnMobile: boolean;
};

export default function ImageWithAnimation({
  src,
  alt,
  animationDelayOnWeb = 0,
  animationDelayOnMobile = 0,
  hasIntroAnimationOnWeb = false,
  hasIntroAnimationOnMobile = false,
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
          timeout = setTimeout(
            () => {
              setIsShowingImage(true);
            },
            getAnimationDelay(
              animationDelayOnWeb,
              animationDelayOnMobile,
              hasIntroAnimationOnWeb,
              hasIntroAnimationOnMobile,
            ),
          );
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
  }, [
    animationDelayOnWeb,
    animationDelayOnMobile,
    hasIntroAnimationOnWeb,
    hasIntroAnimationOnMobile,
  ]);

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
