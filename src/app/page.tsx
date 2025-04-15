export default function Home() {
  return (
    <div className={" bg-primary flex flex-col justify-center items-center"}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={"w-full h-[500px] object-cover"}
      >
        <source src={"/Homepage.mp4"} />
      </video>
      <div
        className={
          "w-full h-full min-h-[500px] relative flex justify-center bg-white"
        }
      >
        <div
          className={
            "z-10 w-full h-full max-w-[1100px] text-2xl mobilePadding drop-shadow-black drop-shadow-lg "
          }
        >
          <p className={"font-bold"}>A Tribute to Automotive Excellence</p>
          <br />
          <p>
            Explore the finest in automotive craftsmanship, where cutting-edge
            engineering meets timeless design. Each car represents more than
            just performance—it embodies a legacy of innovation, precision, and
            passion.
          </p>
          <br />
          <p>
            From the roar of meticulously tuned engines to the aerodynamic
            mastery shaping every curve, these machines are built to push limits
            and redefine the driving experience.
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
            crafted to showcase visual storytelling through frontend creativity.
            All imagery featured remains the property of its respective owners
            and is used here solely for illustrative, non-commercial purposes.
            No copyright infringement is intended.
          </p>
        </div>
        <div className={"absolute z-5 w-full h-full overflow-hidden"}>
          <img
            src={"/nurburgring.jpeg"}
            className={" w-full h-full object-cover  blur-xs scale-110 "}
            alt={"nurburgring.jpeg"}
          />
        </div>
      </div>
      <div
        className={
          "bg-secondary w-full h-full min-h-[500px] mobilePadding flex flex-col justify-center items-center"
        }
      >
        <span className={"font-bold text-2xl text-black"}>
          Featuring Car Brands
        </span>
        <div
          className={
            "w-full h-full flex flex-col  md:flex-row justify-center items-center gap-5"
          }
        >
          <img
            src={"/TOYOTA_PNG.png"}
            alt={"Toyota Logo"}
            className={"w-full md:w-1/3 h-full object-cover scale-70"}
          />
          <img
            src={"/PORSCHE_PNG.png"}
            alt={"Porsche Logo"}
            className={"w-full md:w-1/3 h-full object-cover scale-125"}
          />
          <img
            src={"/HONDA_JPG.jpg"}
            alt={"Honda Logo"}
            className={"w-full md:w-1/3 h-full object-cover scale-80"}
          />
        </div>
      </div>
    </div>
  );
}
