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
      className={`bg-primary min-h-[400px] flex flex-col md:flex-row justify-center items-center ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className={"md:w-1/2 mobilePadding"}>
        <div className={"flex flex-col sectionGap text-start"}>
          <span className="headerText">{header}</span>
          <span className="bodyText">{children}</span>
        </div>
      </div>
      <div className={"md:w-1/2 overflow-hidden"}>
        <img
          src={src}
          alt={alt}
          className={"md:h-[510px] w-full object-cover"}
        />
      </div>
    </div>
  );
}
