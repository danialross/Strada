"use client";
import ImageViewer from "@/components/ImageViewer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { THRESHOLD } from "@/constants";
import { getAnimationDelay } from "@/util";

const images = [
  {
    src: "/about5.webp",
    alt: "Subaru Impreza WRX",
  },
  {
    src: "/about3.jpg",
    alt: "Ferrari F40",
  },
  {
    src: "/about4.webp",
    alt: "Mazda RX-7",
  },
];

export default function Page() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isShowingText, setIsShowingText] = useState(false);

  useEffect(() => {
    const ref = textRef.current;
    let timeout: NodeJS.Timeout;
    if (!ref) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeout = setTimeout(
              () => {
                setIsShowingText(true);
                observer.disconnect();
              },
              getAnimationDelay(0, 0, true, false),
            );
          }
        });
      },
      { threshold: THRESHOLD },
    );
    observer.observe(ref);

    return () => {
      observer.disconnect();
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div
      className={
        " flex flex-col md:grid md:grid-cols-3 bg-secondary sectionGap"
      }
    >
      <div
        className={
          "flex justify-center items-center col-span-3 relative h-[500px] overflow-hidden"
        }
      >
        <span className={"z-5 bannerText absolute "}>About</span>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          className={"col-span-3 w-full h-full object-cover"}
        >
          <source src={"/about.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={
          "relative h-[500px] col-span-1 md:h-auto md:w-full overflow-hidden"
        }
      >
        <ImageViewer
          src={"/about2.webp"}
          alt={"BMW M3"}
          threshold={1}
          animationDelayOnWeb={0}
          animationDelayOnMobile={0}
          hasIntroAnimationOnWeb={true}
          hasIntroAnimationOnMobile={false}
        />
      </div>
      <div className={`col-span-2 min-h-[500px] overflow-hidden`} ref={textRef}>
        <div
          className={` relative h-full flex items-center justify-center overflow-hidden animateMovement ${isShowingText ? "translate-x-0" : "translate-x-full"}`}
        >
          <Image
            src={"/about6.jpg"}
            alt={"Race Track Image"}
            fill
            className={"object-cover blur-xs scale-110"}
          />
          <div className={` top-0 left-0 z-5 w-full h-full mobilePadding`}>
            <p className={"headerText"}>Strada</p>
            <br />
            <div className={"bodyText"}>
              <p>
                A web project dedicated to showcasing the artistry, engineering,
                and innovation behind the world’s most exciting cars. Designed
                as a digital gallery, this site features stunning visuals,
                dynamic animations, and interactive elements to bring each
                vehicle to life.
              </p>
              <br />
              <p>
                From sleek supercars to cutting-edge performance machines, every
                car highlighted here is more than just a mode of
                transportation—it’s a masterpiece of design and technology.
                Through carefully crafted animations and immersive layouts, this
                project aims to capture the essence of speed, power, and
                precision.
              </p>
              <br />
              <p>
                Whether you’re a car enthusiast, a designer, or someone who
                simply appreciates the beauty of automotive engineering, this
                website is a celebration of performance and design in motion.
              </p>
              <br />
              <div
                className={
                  "flex flex-col md:flex-row items-center justify-center"
                }
              >
                <span
                  className={"md:w-[250px] lg:w-[350px] xl:w-auto pb-4 md:pb-0"}
                >
                  For any inquiries or contact information, please reach out
                  here :
                </span>
                <Link
                  href={"https://danialross.vercel.app/"}
                  className={
                    "animateMovement ml-6 hover:scale-110 flex justify-center items-center gap-6 py-2 px-4"
                  }
                >
                  <Image
                    src={"/contact.png"}
                    alt="Portfolio Logo"
                    width={70}
                    height={70}
                    className={"rounded-full -mr-2"}
                  />
                  <span className={"md:w-[50px] lg:w-auto"}>Danial Ross</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full flex flex-col md:flex-row col-span-3 sectionGap`}
      >
        {images.map(({ src, alt }, index) => (
          <div
            className={"relative w-full md:w-1/3 h-[500px] overflow-hidden"}
            key={src}
          >
            <ImageViewer
              src={src}
              alt={alt}
              animationDelayOnWeb={index * 200}
              animationDelayOnMobile={index * 200}
              hasIntroAnimationOnWeb={false}
              hasIntroAnimationOnMobile={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
