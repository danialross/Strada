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
    }, 1500);

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
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
      />
      <div
        className={`w-screen h-screen z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div
          className={"w-full h-full flex flex-col items-center justify-center"}
        >
          <div
            className={
              "w-4/5 md:max-h-[1080px] h-4/5 relative flex justify-center "
            }
          >
            <Image
              fill
              src={src}
              alt={alt}
              className={`object-contain ${position}`}
              sizes={"100vw"}
              ref={overlayImageRef}
            />
            <IoIosClose
              className={
                "absolute top-full md:top-10 left-1/2 md:left-full md:-translate-x-22 hoverEffect w-8 h-8 md:w-12 md:h-12 text-white bg-black border-2 rounded-lg"
              }
              onClick={() => setIsShowOverlay(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
