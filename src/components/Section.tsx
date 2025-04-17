import { ReactNode } from "react";

type SectionProps = {
  header: string;
  src: string;
  alt: string;
  children: ReactNode;
  imagePosition: "left" | "right";
};

export default function Section({
  header,
  src,
  alt,
  children,
  imagePosition,
}: SectionProps) {
  return (
    <div
      className={`bg-primary h-full min-h-[400px] w-full flex flex-col md:flex-row justify-between items-center ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div
        className={
          "w-full md:w-1/2 h-full flex justify-center items-center mobilePadding"
        }
      >
        <div className={"w-full flex flex-col sectionGap text-start"}>
          <span className="headerText">{header}</span>
          <span className="bodyText">{children}</span>
        </div>
      </div>
      <div className={"w-full md:w-1/2 h-[400px] overflow-hidden"}>
        <img src={src} alt={alt} className={"h-full w-full object-cover"} />
      </div>
    </div>
  );
}
