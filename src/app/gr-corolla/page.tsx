import { ImageViewerProps, SectionData } from "@/types";
import ImageViewer from "@/components/ImageViewer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Page() {
  const images: ImageViewerProps[] = [
    {
      src: "/corolla1.jpg",
      alt: "GR Corolla",
    },
    {
      src: "/corolla3.jpg",
      alt: "GR Corolla Drifting",
    },
    {
      src: "/corolla2.jpg",
      alt: "Twin GR Corolla Drifting",
      position: "object-left",
    },
  ];

  const sections: SectionData[] = [
    {
      header: "Overview",
      body: "The Toyota GR Corolla is a rally-bred hot hatch, engineered by Gazoo Racing to deliver raw power, precision handling, and all-weather capability. Unlike the standard Corolla, the GR model is built from the ground up for performance. Designed for enthusiasts, it offers track-ready performance while remaining practical for daily driving.",
      src: "/corolla4.jpg",
      alt: "GR Corolla On Dirt",
      imagePosition: "right",
    },
    {
      header: "Exterior",
      body: "The GR Corolla’s aggressive stance sets it apart with wider fenders, functional air vents, and a bold front grille for improved cooling. The carbon-fiber roof (Circuit Edition) reduces weight, while the rear spoiler and triple-exit exhaust enhance both aerodynamics and style. With matte-black 18-inch wheels wrapped in high-performance tires, the GR Corolla blends rally-inspired toughness with modern aggression.",
      src: "/corollaExterior.jpg",
      alt: "Twin GR Corolla Drifting",
      imagePosition: "left",
    },
    {
      header: "Performance",
      body: "Inside, the GR Corolla’s driver-focused cockpit features sport bucket seats, a leather-wrapped steering wheel, and aluminum pedals for a race-ready feel. A 12.3-inch digital instrument cluster provides real-time performance data, while a 8-inch touchscreen with wireless Apple CarPlay/Android Auto ensures modern connectivity. The Circuit Edition adds suede-trimmed seats and unique badging, making it feel even more exclusive.",
      src: "/corollaEngine.webp",
      alt: "Corolla Engine",
      imagePosition: "right",
    },
    {
      header: "Interior",
      body: "The driver-focused cockpit features red bucket seats, an Alcantara-wrapped steering wheel, and a digital instrument display tuned for performance metrics. The Honda LogR system provides real-time driving data, while a 9-inch touchscreen with wireless Apple CarPlay/Android Auto adds modern connectivity. Minimal yet functional, the FL5’s cabin is built to keep drivers engaged while offering everyday comfort.",
      src: "/corollaInterior.jpg",
      alt: "Corolla Interior",
      imagePosition: "left",
    },
  ];

  return (
    <div className={"bg-secondary flex flex-col sectionGap"}>
      <Image
        width={1920}
        height={600}
        src={"/corollaBanner.webp"}
        alt={"GR Corolla Banner"}
        className={"object-cover"}
      />
      {
        <div
          className={`w-full h-full md:h-[400px] flex flex-col md:flex-row justify-center items-center sectionGap`}
        >
          {images.map(({ src, alt, position }: ImageViewerProps) => (
            <div
              className={
                "w-full h-[300px] md:h-[400px] relative overflow-hidden"
              }
              key={src}
            >
              <ImageViewer src={src} alt={alt} position={position} />
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
