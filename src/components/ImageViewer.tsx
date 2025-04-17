"use client";
import { useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { ImageViewerProps } from "@/types";

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
      <div
        className={"w-full md:w-1/3 h-full overflow-hidden"}
        key={src}
        onClick={() => setIsShowOverlay(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${position} hover:scale-115 animateMovement`}
        />
      </div>
      <div
        className={`z-100 fixed inset-0 animateFade ${isShowOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}  backdrop-blur-xs flex justify-center items-center`}
      >
        <div
          className={"h-auto md:h-11/12 w-11/12 md:w-auto relative"}
          key={src}
        >
          <MdOutlineClear
            className={
              "absolute top-2 right-2 md:top-5 md:right-5 hoverEffect w-10 h-10 md:w-12 md:h-12"
            }
            onClick={() => setIsShowOverlay(false)}
            color={"white"}
          />
          <img
            src={src}
            alt={alt}
            className={`w-full md:w-auto h-auto md:h-full object-cover ${position}`}
          />
        </div>
      </div>
    </>
  );
}
