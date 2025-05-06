import { ImageViewerProps, SectionData } from "@/types";
import ImageViewer from "@/components/ImageViewer";
import Section from "@/components/Section";
import Image from "next/image";
import { INTRO_DELAY } from "@/constants";

const images: ImageViewerProps[] = [
  {
    src: "/9113.webp",
    alt: "911 Carrera Rear",
  },
  {
    src: "/9114.jpg",
    alt: "911 Carrera Front",
  },
  {
    src: "/9112.webp",
    alt: "911 Close Up",
  },
];

const sections: SectionData[] = [
  {
    header: "Overview",
    body: "The Porsche 911 Carrera (992) is the entry point into the legendary 911 lineup, blending timeless design with modern performance. Retaining its rear-engine layout, the 992 Carrera delivers an exhilarating driving experience with precision handling, a refined interior, and cutting-edge technology. Perfect for both daily driving and spirited weekend runs.",
    src: "/9111.jpg",
    alt: "911 Speeding",
    imagePosition: "right",
  },
  {
    header: "Exterior",
    body: "The 911 Carrera (992) carries the classic 911 silhouette with a wider stance and sleeker bodywork for improved aerodynamics. The LED Matrix headlights, active air intakes, and a deployable rear spoiler contribute to both form and function. Flush door handles and a seamless light bar at the rear add to the modernized aesthetic while staying true to the 911’s heritage.",
    src: "/911Exterior.jpg",
    alt: "911 Carrera Front and Back",
    imagePosition: "left",
  },
  {
    header: "Performance",
    body: "Inside, the 992 Carrera features a driver-focused cockpit with a 10.9-inch touchscreen, digital instrument cluster, and premium materials throughout. The GT-style steering wheel, sport seats, and optional leather upgrades create a luxurious yet performance-oriented cabin. Wireless Apple CarPlay, Android Auto, and a premium Bose or Burmester sound system enhance connectivity and comfort.",
    src: "/911Engine.jpg",
    alt: "911 Engine",
    imagePosition: "right",
  },
  {
    header: "Interior",
    body: "Inside, the 992 Carrera features a driver-focused cockpit with a 10.9-inch touchscreen, digital instrument cluster, and premium materials throughout. The GT-style steering wheel, sport seats, and optional leather upgrades create a luxurious yet performance-oriented cabin. Wireless Apple CarPlay, Android Auto, and a premium Bose or Burmester sound system enhance connectivity and comfort.",
    src: "/911Interior.webp",
    alt: "911 Interior",
    imagePosition: "left",
  },
];

export default function Page() {
  return (
    <div className={"bg-secondary flex flex-col sectionGap"}>
      <div className={"w-full h-[400px] overflow-hidden relative"}>
        <Image
          fill
          sizes={"100vw"}
          src={"/911Banner.jpg"}
          alt={"911 Carrera"}
          className={"w-full h-full object-cover"}
          priority
        />
        <div
          className={
            "absolute top-1/5 md:top-1/2 left-1/2 md:left-1/5 -translate-1/2 bannerText text-center text-nowrap"
          }
        >
          <span>Porsche 992</span>
          <br />
          <span>911 Carrera</span>
        </div>
      </div>
      {
        <div
          className={`w-full h-full flex flex-col md:flex-row justify-center items-center sectionGap`}
        >
          {images.map(({ src, alt, position }: ImageViewerProps, index) => (
            <div
              className={
                "w-full h-[300px] md:h-[400px] relative overflow-hidden"
              }
              key={src}
            >
              <ImageViewer
                src={src}
                alt={alt}
                position={position}
                animationDelay={index * 200 + INTRO_DELAY}
              />
            </div>
          ))}
        </div>
      }
      {sections.map(
        ({ header, src, alt, imagePosition, body }: SectionData) => (
          <Section
            header={header}
            src={src}
            alt={alt}
            imagePosition={imagePosition}
            key={src}
          >
            {body}
          </Section>
        ),
      )}
    </div>
  );
}
