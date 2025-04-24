"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { ImageViewerProps } from "@/types";
import Image from "next/image";

//parent needs to be relative
export default function ImageViewer({ src, alt, position }: ImageViewerProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  useEffect(() => {
    if (isShowOverlay) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isShowOverlay]);

  useEffect(() => {
    if (imageRef) {
    }
  }, [imageRef]);
  return (
    <>
      <Image
        src={src}
        sizes={"(max-width: 768px) 100vw, 50vw"}
        alt={alt}
        fill
        className={`object-cover ${position} hover:scale-115 animateMovement`}
        onClick={() => setIsShowOverlay(true)}
      />
      <div
        className={`w-screen h-screen z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div
          className={"w-full h-full flex flex-col items-center justify-center"}
        >
          <div
            className={"w-4/5 h-4/5 relative flex justify-center"}
            ref={imageRef}
          >
            <Image
              fill
              src={src}
              alt={alt}
              className={`object-contain md:object-cover ${position}`}
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
