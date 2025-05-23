"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ImageViewerProps } from "@/types";
import Image from "next/image";
import { THRESHOLD } from "@/constants";
import { getAnimationDelay } from "@/util";

//parent needs to be relative
//the IntersectionObserver is delayed to account for transitionAnimation overlay
export default function ImageViewer({
  src,
  alt,
  position,
  animationDelayOnWeb = 0,
  animationDelayOnMobile = 0,
  hasIntroAnimationOnWeb = false,
  hasIntroAnimationOnMobile = false,
  threshold = THRESHOLD,
}: ImageViewerProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  const [isShowImage, setIsShowImage] = useState(false);
  useEffect(() => {
    if (isShowOverlay) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isShowOverlay]);

  useEffect(() => {
    const ref = imageRef.current;
    if (!ref) return;

    let animationTimeout: NodeJS.Timeout | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationTimeout = setTimeout(
              () => {
                setIsShowImage(true);
                observer.disconnect();
              },
              getAnimationDelay(
                animationDelayOnWeb,
                animationDelayOnMobile,
                hasIntroAnimationOnWeb,
                hasIntroAnimationOnMobile,
              ), //Overlay Duration Time
            );
          }
        });
      },
      {
        threshold: threshold,
      },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [
    animationDelayOnWeb,
    animationDelayOnMobile,
    hasIntroAnimationOnWeb,
    hasIntroAnimationOnMobile,
  ]);
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${isShowImage ? "opacity-100" : "opacity-0"} object-cover ${position} hover:scale-115 transition-all duration-500 ease-in-out`}
        onClick={() => setIsShowOverlay(true)}
        ref={imageRef}
        sizes={"100vw"}
      />
      <div
        className={`w-screen h-screen z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div
          className={"w-11/12 md:max-h-[800px] max-w-[1600px] h-10/12 relative"}
        >
          <Image
            fill
            src={src}
            alt={alt}
            className={`object-contain md:object-cover ${position} `}
            sizes={"100vw"}
            quality={100}
          />
          <IoIosClose
            className={
              "absolute top-full md:top-10 left-1/2 md:left-full md:-translate-x-22 hoverEffect w-8 h-8 md:w-12 md:h-12 text-white bg-black border-2 rounded-lg"
            }
            onClick={() => setIsShowOverlay(false)}
          />
        </div>
      </div>
    </>
  );
}
