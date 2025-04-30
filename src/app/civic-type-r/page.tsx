import { ImageViewerProps, SectionData } from "@/types";
import Section from "@/components/Section";
import ImageViewer from "@/components/ImageViewer";
import Image from "next/image";

const images: ImageViewerProps[] = [
  {
    src: "/typer1.webp",
    alt: "Civic Type R Front View",
  },
  {
    src: "/typer4.webp",
    position: "object-left",
    alt: "Civic Type R Side View",
  },
  {
    src: "/typer3.jpg",
    position: "object-left",
    alt: "Civic Type R Rear View",
  },
];

const sections: SectionData[] = [
  {
    header: "Overview",
    body: "The Honda Civic Type R FL5 refines the legendary front-wheel-drive performance formula, offering enhanced aerodynamics, improved handling, and a more sophisticated yet aggressive design. Built for both the track and daily driving, the FL5 combines precision engineering with raw driving engagement, making it the most advanced Type R to date.",
    src: "/typer2.png",
    alt: "Type R On Track",
    imagePosition: "right",
  },
  {
    header: "Exterior",
    body: "The FL5 evolves the Type R’s signature bold and functional design, featuring a more sculpted front bumper, wider fenders, and a lower stance for improved aerodynamics. The rear wing is sleeker yet effective, while the triple-exit exhaust and functional vents emphasize its track-ready nature. Rolling on 19-inch lightweight matte black wheels, the FL5 balances style with downforce and cooling efficiency.",
    src: "/typerExterior.jpg",
    alt: "Type R Rear",
    imagePosition: "left",
  },
  {
    header: "Performance",
    body: "At its core, the FL5 is powered by a 2.0L turbocharged VTEC engine, delivering 315 hp and 310 lb-ft of torque, making it the most powerful Civic Type R yet. The 6-speed manual transmission with rev-matching ensures precise and satisfying shifts, while the limited-slip differential and adaptive suspension provide unparalleled front-wheel-drive control. Brembo brakes, a stiffened chassis, and improved aerodynamics ensure it remains a true track weapon while maintaining street usability.",
    src: "/typerEngine.jpg",
    alt: "Type R Engine",
    imagePosition: "right",
  },
  {
    header: "Interior",
    body: "The driver-focused cockpit features red bucket seats, an Alcantara-wrapped steering wheel, and a digital instrument display tuned for performance metrics. The Honda LogR system provides real-time driving data, while a 9-inch touchscreen with wireless Apple CarPlay/Android Auto adds modern connectivity. Minimal yet functional, the FL5’s cabin is built to keep drivers engaged while offering everyday comfort.",
    src: "/typerInterior.jpg",
    alt: "Type R Interior",
    imagePosition: "left",
  },
];

export default function Page() {
  return (
    <div
      className={
        "bg-secondary flex flex-col justify-center items-center sectionGap"
      }
    >
      <div className={"w-full h-[400px] relative"}>
        <div className={"absolute top-0 left-0 w-full h-full"}>
          <Image
            width={1900}
            height={791}
            src={"/typerBanner.jpeg"}
            alt={"Civic Type R Banner"}
            className={"w-full h-full object-cover object-right"}
            priority
          />
        </div>
        <span
          className={
            "absolute w-[250px] lg:w-auto top-1/10  md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md: md:left-1/10 md:translate-x-0 bannerText text-center"
          }
        >
          Honda Civic Type R FL5
        </span>
      </div>
      <div
        className={`w-full h-full md:h-[400px] flex flex-col md:flex-row justify-center items-center sectionGap`}
      >
        {images.map(({ src, alt, position }: ImageViewerProps, index) => (
          <div
            className={"w-full h-[300px] md:h-[400px] relative overflow-hidden"}
            key={src}
          >
            <ImageViewer
              src={src}
              alt={alt}
              position={position}
              animationDelay={index * 200}
            />
          </div>
        ))}
      </div>
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
