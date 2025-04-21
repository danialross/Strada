"use client";
import { useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { ImageViewerProps } from "@/types";
import Image from "next/image";

//parent needs to be relative
export default function ImageViewer({ src, alt, position }: ImageViewerProps) {
  const [isShowOverlay, setIsShowOverlay] = useState(false);
  useEffect(() => {
    if (isShowOverlay) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isShowOverlay]);
  return (
    <>
      <Image
        src={src}
        sizes={"100vw"}
        alt={alt}
        fill
        className={`object-cover ${position} hover:scale-115 animateMovement`}
        onClick={() => setIsShowOverlay(true)}
      />
      <div
        className={`w-screen h-screen z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div className={"w-full h-full flex items-center justify-center"}>
          <div className={"w-4/5 h-4/5 relative"}>
            <Image
              fill
              src={src}
              sizes={"100vw"}
              alt={alt}
              className={`object-contain ${position}`}
            />
            <MdOutlineClear
              className={
                "absolute top-0 right-0 -translate-y-full hoverEffect w-10 h-10 md:w-12 md:h-12"
              }
              onClick={() => setIsShowOverlay(false)}
              color={"white"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
