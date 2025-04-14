import { IoMdArrowRoundBack } from "react-icons/io";
import { Make } from "@/types";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type NestSidebarProps = {
  make: Make;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const redirectLinks = {
  toyota: [
    { label: "GR Corolla", url: "/gr-corolla" },
    { label: "GR Yaris", url: "/gr-yaris" },
  ],
  honda: [
    { label: "Civic Type R", url: "/civic-type-r" },
    { label: "S2000", url: "/s2000" },
  ],
  porsche: [
    { label: "911 Carrera", url: "/911-carrera" },
    { label: "718 Cayman", url: "/718-cayman" },
  ],
};

export default function NestedSidebar({
  make,
  isVisible,
  setIsVisible,
}: NestSidebarProps) {
  return (
    <div
      className={`absolute top-0 left-0 md:left-full slideEffect ease-in-out bg-background px-[40px] py-[25px] w-screen md:w-[250px] h-full ${!isVisible && "translate-y-full"} flex flex-col items-start justify-start gap-3`}
    >
      <div className={"w-full pb-3"}>
        <IoMdArrowRoundBack
          size={32}
          className={"opacity-100 md:opacity-0 md:pointer-events-none"}
          onClick={() => setIsVisible(false)}
        />
      </div>
      {make &&
        redirectLinks[make].map((link) => (
          <div
            className={"w-full flex items-center py-3 hoverEffect"}
            key={link.url}
          >
            <Link href={link.url}>{link.label}</Link>
          </div>
        ))}
    </div>
  );
}
