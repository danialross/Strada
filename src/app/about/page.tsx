import ImageViewer from "@/components/ImageViewer";
import { ImageViewerProps } from "@/types";

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
      className={"flex flex-col md:grid md:grid-cols-3 bg-secondary sectionGap"}
    >
      <div
        className={
          "col-span-3 relative h-[400px] overflow-hidden flex items-center justify-center"
        }
      >
        <span className={"z-10 bannerText"}>About</span>

        <img
          src={"/about1.jpg"}
          alt={"About Banner"}
          className={
            "h-[400px] w-full absolute top-0 left-0 z-1  object-cover object-top"
          }
        />
      </div>
      <div className={"md:w-screen md:pr-[50px] col-span-1"}>
        <ImageViewer src={"/about2.webp"} alt={"BMW M3"} />
      </div>
      <div className={"col-span-2 relative flex items-center justify-center"}>
        <div
          className={"absolute w-full h-full left-0 top-0 z-1 overflow-hidden"}
        >
          <img
            src={"/about6.jpg"}
            alt={"Race Track Image"}
            className={"w-full h-full object-cover blur-xs scale-110"}
          />
        </div>
        <div className={"z-10 w-full h-full mobilePadding"}>
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
        className={`w-full col-span-3 h-full flex flex-col md:flex-row justify-center items-center sectionGap`}
      >
        {images.map(({ src, alt }: ImageViewerProps) => (
          <ImageViewer src={src} alt={alt} key={src} />
        ))}
      </div>
    </div>
  );
}
