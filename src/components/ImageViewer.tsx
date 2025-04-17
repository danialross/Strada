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
        <div className={"h-4/5 relative"} key={src}>
          <MdOutlineClear
            size={42}
            className={"absolute top-4 right-4 hoverEffect"}
            onClick={() => setIsShowOverlay(false)}
            color={"white"}
          />
          <img
            src={src}
            alt={alt}
            className={`h-full object-cover ${position}`}
          />
        </div>
      </div>
    </>
  );
}
