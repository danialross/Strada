import ImageViewer from "@/components/ImageViewer";
import { ImageViewerProps } from "@/types";
import Image from "next/image";

export default function Page() {
  const images: ImageViewerProps[] = [
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

  return (
    <div
      className={
        " flex flex-col md:grid md:grid-cols-3 bg-secondary sectionGap"
      }
    >
      <div
        className={
          "flex justify-center items-center col-span-3 relative h-[400px] overflow-hidden border border-black"
        }
      >
        <span className={"z-5 bannerText"}>About</span>
        <Image
          src={"/about1.jpg"}
          alt={"About Banner"}
          fill
          className={"object-cover object-top"}
        />
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        className={"col-span-3 w-full h-full md:max-h-[400px] object-cover"}
      >
        <source src={"/about.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={"relative h-[400px] md:h-auto md:w-full overflow-hidden"}>
        <ImageViewer src={"/about2.webp"} alt={"BMW M3"} />
      </div>
      <div
        className={
          "col-span-2 relative flex items-center justify-center overflow-hidden"
        }
      >
        <Image
          src={"/about6.jpg"}
          alt={"Race Track Image"}
          fill
          className={"object-cover blur-xs scale-110"}
        />

        <div className={"z-5 w-full h-full mobilePadding"}>
          <p className={"headerText"}>Strada</p>
          <br />
          <div className={"bodyText"}>
            <p>
              A web project dedicated to showcasing the artistry, engineering,
              and innovation behind the world’s most exciting cars. Designed as
              a digital gallery, this site features stunning visuals, dynamic
              animations, and interactive elements to bring each vehicle to
              life.
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
              Whether you’re a car enthusiast, a designer, or someone who simply
              appreciates the beauty of automotive engineering, this website is
              a celebration of performance and design in motion.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full flex flex-col md:flex-row col-span-3 sectionGap`}
      >
        {images.map(({ src, alt }: ImageViewerProps) => (
          <div
            className={"relative w-full h-[400px] border overflow-hidden"}
            key={src}
          >
            <ImageViewer src={src} alt={alt} key={src} />
          </div>
        ))}
      </div>
    </div>
  );
}
