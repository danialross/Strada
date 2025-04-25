import { ImageViewerProps, SectionData } from "@/types";
import ImageViewer from "@/components/ImageViewer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Page() {
  const images: ImageViewerProps[] = [
    {
      src: "/yaris4.jpeg",
      alt: "GR Yaris Drifting",
    },
    {
      src: "/yaris1.jpg",
      alt: "GR Yaris Rear",
      position: "object-left",
    },
    {
      src: "/yaris3.jpg",
      alt: "GR Yaris On Track",
    },
  ];

  const sections: SectionData[] = [
    {
      header: "Overview",
      body: "The Toyota GR Yaris is a rally-inspired hot hatch. It features a lightweight chassis, all-wheel drive, and a turbocharged engine, making it one of the most exciting modern hatchbacks. The GR Yaris has a bespoke three-door body, aggressive aerodynamics, and motorsport-level engineering, ensuring a pure driver-focused experience.",
      src: "/yaris2.jpg",
      alt: "GR Yaris Side by Side",
      imagePosition: "right",
    },
    {
      header: "Exterior",
      body: "The GR Yaris sports a wide stance, sculpted aerodynamics, and a sloping roofline, designed to optimize airflow and stability. The carbon-fiber roof and aluminum panels reduce weight, while the large front grille, flared wheel arches, and rear diffuser enhance both performance and aggression. The GR Yaris looks every bit the rally-bred machine it is.",
      src: "/yarisExterior.jpg",
      alt: "GR Yaris Front and Back",
      imagePosition: "left",
    },
    {
      header: "Performance",
      body: "Under the hood is a 1.6L turbocharged three-cylinder engine, producing 257-268 horsepower and 266 lb-ft of torque. Power is sent through a GR-FOUR all-wheel-drive system. Weighing just 1,280 kg (2,822 lbs), the GR Yaris delivers razor-sharp handling and motorsport-level performance, making it an absolute blast on both road and track.",
      src: "/yarisEngine.jpg",
      alt: "GR Yaris Engine",
      imagePosition: "right",
    },
    {
      header: "Interior",
      body: "The cabin is a perfect blend of sportiness and practicality, featuring GR-branded bucket seats, a leather-wrapped steering wheel, and aluminum pedals for a race-inspired feel. While minimalist, the GR Yaris still offers modern tech like Apple CarPlay, Android Auto, and a premium audio system, ensuring comfort alongside its aggressive nature.",
      src: "/yarisInterior.webp",
      alt: "GR Yaris Interior",
      imagePosition: "left",
    },
  ];

  return (
    <div className={"bg-secondary flex flex-col sectionGap"}>
      <div className={"relative w-full h-[400px] overflow-hidden"}>
        <Image
          width={1280}
          height={678}
          src={"/yarisBanner.webp"}
          alt={"GR Yaris Banner"}
          className={"h-full w-full object-cover object-center"}
          priority
        />
        <div
          className={
            "text-center absolute top-1/4 md:top-1/2 left-1/2 md:left-1/5 -translate-1/2 bannerText"
          }
        >
          <span>Toyota</span>
          <br className={"lg:hidden"} />
          <span> GR Yaris</span>
        </div>
      </div>
      {
        <div
          className={`w-full h-full md:h-[400px] flex flex-col md:flex-row justify-center items-center sectionGap`}
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
                animationDelay={index * 200}
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
