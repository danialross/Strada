import Image from "next/image";
import TransitionAnimation from "@/components/TransitionAnimation";

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
  return (
    <>
      <TransitionAnimation />
      <div className={" bg-primary flex flex-col justify-center items-center"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={"w-full h-[500px] object-cover"}
        >
          <source src={"/Homepage.mp4"} />
          Your browser does not support the video tag.
        </video>
        <div
          className={
            "w-full h-full min-h-[500px] relative flex justify-center bg-white"
          }
        >
          <div
            className={"z-5 w-full h-full max-w-[1100px] text-lg mobilePadding"}
          >
            <p className={"headerText"}>A Tribute to Automotive Excellence</p>
            <br />
            <div className={"bodyText"}>
              <p>
                Explore the finest in automotive craftsmanship, where
                cutting-edge engineering meets timeless design. Each car
                represents more than just performance—it embodies a legacy of
                innovation, precision, and passion.
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
                This project is a personal exploration of design and
                development, crafted to showcase visual storytelling through
                frontend creativity. All imagery featured remains the property
                of its respective owners and is used here solely for
                illustrative, non-commercial purposes. No copyright infringement
                is intended.
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
            " w-full h-full mobilePadding flex flex-col justify-center items-center bg-secondary"
          }
        >
          <span className={"font-bold text-2xl text-primary pb-5"}>
            Featuring Car Brands
          </span>
          <div
            className={
              "w-full flex flex-col md:flex-row gap-20 justify-center items-center"
            }
          >
            {logos.map(({ src, alt }: Logo) => (
              <div className={"relative w-full h-[200px] m"} key={src}>
                <Image
                  fill
                  sizes="(max-width: 250px) 50vw, 100vw"
                  src={src}
                  alt={alt}
                  className={"object-contain"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
