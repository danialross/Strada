import { ReactNode } from "react";
import Image from "next/image";

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
      className={`bg-primary min-h-[400px] flex flex-col md:flex-row justify-center items-center ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className={"md:w-1/2 mobilePadding"}>
        <div className={"flex flex-col sectionGap text-start"}>
          <span className="headerText">{header}</span>
          <span className="bodyText">{children}</span>
        </div>
      </div>
      <div className={"relative w-full md:w-1/2 h-[400px] overflow-hidden"}>
        <Image
          src={src}
          alt={alt}
          sizes={"(max-width: 768px) 50vw, 100vw"}
          fill
          className={"object-cover"}
        />
      </div>
    </div>
  );
}
