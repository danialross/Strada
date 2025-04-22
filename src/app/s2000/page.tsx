import { ImageViewerProps, SectionData } from "@/types";
import ImageViewer from "@/components/ImageViewer";
import Section from "@/components/Section";

export default function Page() {
  const images: ImageViewerProps[] = [
    {
      src: "/s2k1.jpeg",
      alt: "Honda S2000 In The Canyons",
    },
    {
      src: "/s2k2.webp",
      alt: "Yellow Honda S2000",
    },
    {
      src: "/s2k3.jpg",
      alt: "Honda S2000 Rear",
    },
  ];

  const sections: SectionData[] = [
    {
      header: "Overview",
      body: "The Honda S2000 is a legendary roadster known for its high-revving engine, precise handling, and timeless design. Produced from 1999 to 2009, it remains one of the most celebrated driver-focused sports cars. With a lightweight chassis, rear-wheel drive, and a 50:50 weight distribution, the S2000 delivers an exhilarating open-top driving experience, making it a favorite among enthusiasts.",
      src: "/s2kMain.jpg",
      alt: "S200 Stanced",
      imagePosition: "right",
    },
    {
      header: "Exterior",
      body: "The S2000 features a sleek, aerodynamic design with a long hood and short rear deck, giving it a classic roadster look. Sharp body lines, flared fenders, and a low stance enhance both its aesthetics and performance. The power-operated soft-top folds away seamlessly, while later models (AP2) feature subtle design refinements like updated bumpers and taillights.",
      src: "/s2kExterior.jpg",
      alt: "S2000 Type R",
      imagePosition: "left",
    },
    {
      header: "Performance",
      body: "At the heart of the S2000 is the F20C (AP1) and F22C1 (AP2) engine, famous for its high-revving nature—redlining at 8,800 RPM (AP1) and 8,000 RPM (AP2). The naturally aspirated 2.0L/2.2L inline-four produces 237-247 horsepower, paired with a precise 6-speed manual transmission. A limited-slip differential, double-wishbone suspension, and razor-sharp steering provide incredible handling, making it one of the most engaging rear-wheel-drive sports cars ever built.",
      src: "/s2kEngine.jpg",
      alt: "S2000 Engine",
      imagePosition: "right",
    },
    {
      header: "Interior",
      body: "The minimalist, driver-focused cockpit is designed for pure engagement. A digital instrument cluster, leather-wrapped steering wheel, and supportive bucket seats put the driver at the center of the experience. The short-throw shifter is one of the best in the industry, offering snappy, precise gear changes. Later models added refinements like improved seats and softer suspension, but the S2000 always stayed true to its performance-first philosophy.",
      src: "/s2kInterior.jpg",
      alt: "S2000 Interior",
      imagePosition: "left",
    },
  ];

  return (
    <div className={"bg-secondary flex flex-col sectionGap"}>
      <div className={" w-full h-full lg:h-[400px] overflow-hidden"}>
        <img
          src={"/s2kBanner.jpg"}
          alt={"Honda S2000 Banner"}
          className={"w-full h-full object-cover object-left"}
        />
      </div>
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
