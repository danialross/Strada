"use client";
import ImageWithAnimation from "@/components/ImageWithAnimation";
import { useEffect, useRef, useState } from "react";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  {
    src: "/logo_honda.webp",
    alt: "Honda Logo",
  },
  {
    src: "/logo_porsche.webp",
    alt: "Porsche Logo",
  },
  {
    src: "/logo_toyota.png",
    alt: "Toyota Logo",
  },
];

export default function Home() {
  const introTextRef = useRef<HTMLDivElement>(null);
  const welcomeTextRef = useRef<HTMLDivElement>(null);
  const [isShowingIntroText, setIsShowingIntroText] = useState(false);
  const [isShowingWelcomeText, setIsShowingWelcomeText] = useState(false);

  useEffect(() => {
    let introObserver: IntersectionObserver | null = null;
    let welcomeObserver: IntersectionObserver | null = null;

    const handleIntroTextAnimation: IntersectionObserverCallback = (
      entries,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShowingIntroText(true);
        }
      });
    };

    const handleWelcomeTextAnimation: IntersectionObserverCallback = (
      entries,
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShowingWelcomeText(true);
        }
      });
    };

    if (introTextRef.current) {
      introObserver = new IntersectionObserver(handleIntroTextAnimation, {
        threshold: 0.2,
      });
      introObserver.observe(introTextRef.current);
    }

    if (welcomeTextRef.current) {
      welcomeObserver = new IntersectionObserver(handleWelcomeTextAnimation);
      welcomeObserver.observe(welcomeTextRef.current);
    }

    return () => {
      if (introTextRef.current && introObserver) {
        introObserver.unobserve(introTextRef.current);
      }
      if (introTextRef.current && welcomeObserver) {
        welcomeObserver.unobserve(introTextRef.current);
      }
    };
  }, []);

  return (
    <div className={" bg-primary flex flex-col justify-center items-center"}>
      <div className={"w-full relative flex justify-center"}>
        <div
          className={`absolute  w-full max-w-[1100px] mobilePadding top-3/4 -translate-y-1/2 text-right ${isShowingWelcomeText ? "translate-x-0" : "-translate-x-[90vw]"} animateMovement`}
          ref={welcomeTextRef}
        >
          <p className={"headerText"}>Enter the World of</p>
          <p className={"bannerText"}>Automotive Elegance</p>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={"w-full h-[500px] object-cover"}
        >
          <source src={"/Homepage.mp4"} />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={
          "w-full h-full min-h-[500px] relative flex justify-center bg-white"
        }
      >
        <div
          className={`z-5 w-full h-full max-w-[1100px] text-lg mobilePadding transition-all duration-200 ease-in-out ${isShowingIntroText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          ref={introTextRef}
        >
          <p className={"headerText"}>A Tribute to Automotive Excellence</p>
          <br />
          <div className={"bodyText"}>
            <p>
              Explore the finest in automotive craftsmanship, where cutting-edge
              engineering meets timeless design. Each car represents more than
              just performance—it embodies a legacy of innovation, precision,
              and passion.
            </p>
            <br />
            <p>
              From the roar of meticulously tuned engines to the aerodynamic
              mastery shaping every curve, these machines are built to push
              limits and redefine the driving experience.
            </p>
            <br />
            <p>
              Discover the stories behind the world’s most exhilarating
              performance cars, immerse yourself in the beauty of speed, and
              witness the evolution of automotive excellence.
            </p>
            <br />
            <p>
              This is more than a showcase—it’s a celebration of performance,
              power, and the art of speed.
            </p>
            <br />
            <p>
              This project is a personal exploration of design and development,
              crafted to showcase visual storytelling through frontend
              creativity. All imagery featured remains the property of its
              respective owners and is used here solely for illustrative,
              non-commercial purposes. No copyright infringement is intended.
            </p>
          </div>
        </div>
        <div className={"absolute z-1 w-full h-full overflow-hidden"}>
          <img
            src={"/nurburgring.jpeg"}
            className={" w-full h-full object-cover  blur-xs scale-110 "}
            alt={"nurburgring.jpeg"}
          />
        </div>
      </div>
      <div
        className={
          "w-full h-full min-h-[500px] mobilePadding flex flex-col justify-evenly items-center bg-secondary"
        }
      >
        <span
          className={
            "font-bold text-4xl md:text-2xl lg:text-4xl text-primary pb-8 text-center"
          }
        >
          Featuring Brands
        </span>
        <div
          className={
            "flex flex-col lg:flex-row w-full gap-20 pb-4 md:pb-12 justify-evenly items-center"
          }
        >
          {logos.map(({ src, alt }: Logo, index) => (
            <div
              className={"relative w-full max-w-[400px] md:w-1/3 aspect-[16/9]"}
              key={src}
            >
              <ImageWithAnimation
                key={src}
                src={src}
                alt={alt}
                animationDelay={index * 250}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
