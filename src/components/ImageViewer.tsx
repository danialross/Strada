"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ImageViewerProps } from "@/types";
import Image from "next/image";

//parent needs to be relative
//the IntersectionObserver is delayed to account for transitionAnimation overlay
export default function ImageViewer({
  src,
  alt,
  position,
  animationDelay = 0,
}: ImageViewerProps) {
  const overlayImageRef = useRef<HTMLImageElement | null>(null);
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
    let observer: IntersectionObserver | null = null;
    let animationTimeout: NodeJS.Timeout | null = null;
    let mountingTimeout: NodeJS.Timeout | null = null;
    const handleAppear: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationTimeout = setTimeout(
            () => setIsShowImage(true),
            animationDelay,
          );
        }
      });
    };

    mountingTimeout = setTimeout(() => {
      if (imageRef.current) {
        observer = new IntersectionObserver(handleAppear, { threshold: 0.2 });
        observer.observe(imageRef.current);
      }
    }, 1000);

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      if (mountingTimeout) {
        clearTimeout(mountingTimeout);
      }
    };
  }, []);
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${isShowImage ? "opacity-100" : "opacity-0"} object-cover ${position} hover:scale-115 animateAll`}
        onClick={() => setIsShowOverlay(true)}
        ref={imageRef}
        sizes={"(max-size: 768px) 100vw, 50vw"}
      />
      <div
        className={`w-screen h-screen z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div
          className={"w-full h-full flex flex-col items-center justify-center"}
        >
          <div className={"w-4/5 h-4/5 relative flex justify-center"}>
            <Image
              fill
              src={src}
              alt={alt}
              className={`object-contain lg:object-cover ${position}`}
              sizes={"100vw"}
              ref={overlayImageRef}
            />
            <IoIosClose
              className={
                "absolute top-1/2 -right-4 -translate-y-1/2 translate-x-full hoverEffect w-10 h-10 md:w-12 md:h-12 bg-white text-primary border-primary border-2 rounded-md"
              }
              onClick={() => setIsShowOverlay(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
