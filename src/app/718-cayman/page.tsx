import { ImageViewerProps, SectionData } from "@/types";
import ImageViewer from "@/components/ImageViewer";
import Section from "@/components/Section";
import Image from "next/image";

export default function Page() {
  const images: ImageViewerProps[] = [
    {
      src: "/7181.jpg",
      alt: "718 Cayman Rear",
    },
    {
      src: "/7184.jpg",
      alt: "718 Cayman Front",
    },
    {
      src: "/7182.webp",
      alt: "718 Cayman On Track",
    },
  ];

  const sections: SectionData[] = [
    {
      header: "Overview",
      body: "The Porsche 718 Cayman is a mid-engine sports coupe that captures the essence of driving purity. Designed with balance and precision in mind, it offers a focused, engaging experience for enthusiasts who value sharp handling, refined engineering, and timeless design. As the hardtop sibling to the 718 Boxster, the Cayman provides increased structural rigidity and an even more connected feel on the road or track.",
      src: "/7183.webp",
      alt: "718 Cayman Drifting",
      imagePosition: "right",
    },
    {
      header: "Exterior",
      body: "Sleek and purposeful, the 718 Cayman features clean lines, wide shoulders, and a low stance that highlight its performance capabilities. Signature four-point LED headlights, bold side air intakes, and a seamless rear light strip contribute to its modern yet unmistakably Porsche silhouette. Details like the center-mounted exhaust and integrated spoiler enhance both aerodynamics and style.",
      src: "/718Exterior.jpg",
      alt: "718 Cayman Front and Back",
      imagePosition: "left",
    },
    {
      header: "Performance",
      body: "At its core, the Cayman is powered by a turbocharged flat-four engine, delivering 300 horsepower and quick, responsive acceleration. Thanks to its mid-engine layout, the car maintains near-perfect weight distribution, translating to sharp cornering and exceptional agility. Whether paired with the manual transmission or Porsche’s PDK dual-clutch, the Cayman offers a dynamic and rewarding drive that’s hard to match.",
      src: "/718Engine.webp",
      alt: "718 Cayman Engine",
      imagePosition: "right",
    },
    {
      header: "Interior",
      body: "Inside, the Cayman blends functionality with sophistication. The driver-centric layout places key controls within easy reach, while high-quality materials and available options. Technology is intuitive and streamlined, with Porsche Communication Management (PCM), smartphone integration, and premium audio available for a comfortable, connected experience.",
      src: "/718Interior.jpg",
      alt: "718 Cayman Interior",
      imagePosition: "left",
    },
  ];

  return (
    <div className={"bg-secondary flex flex-col sectionGap"}>
      <div className={"overflow-hidden relative"}>
        <Image
          width={3840}
          height={1476}
          src={"/718Banner.jpg"}
          alt={"718 Cayman"}
          className={"h-[300px] md:w-full object-cover"}
        />
        <div
          className={
            "absolute top-1/4 md:top-1/2 left-1/2 md:left-2/3 -translate-1/2 bannerText text-center"
          }
        >
          <span className={"text-nowrap"}>Porsche 982</span>
          <br />
          <span className={"text-nowrap"}> 718 Cayman</span>
        </div>
      </div>
      <div
        className={`w-full h-full md:h-[400px] flex flex-col md:flex-row justify-center items-center sectionGap`}
      >
        {images.map(({ src, alt, position }: ImageViewerProps) => (
          <div
            className={"w-full h-[300px] md:h-[400px] relative overflow-hidden"}
            key={src}
          >
            <ImageViewer src={src} alt={alt} position={position} />
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
