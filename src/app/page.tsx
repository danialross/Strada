export default function Home() {
  return (
    <div className={"bg-primary flex justify-center"}>
      <video autoPlay loop muted playsInline className={"w-[1280px]"}>
        <source src={"/yarisEdit.mp4"} />
      </video>
    </div>
  );
}
