import { IoMdArrowRoundBack } from "react-icons/io";
import { Make, RedirectLinkData } from "@/types";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

type NestedSidebarProps = {
  make: Make;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setIsAllSidebarVisible: Dispatch<SetStateAction<boolean>>;
};

type RedirectObject = {
  [brand: string]: RedirectLinkData[];
};

const redirectLinks: RedirectObject = {
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
  setIsAllSidebarVisible,
}: NestedSidebarProps) {
  const handleCloseNestedSidebar = () => {
    setIsVisible(false);
  };

  const handleCloseAllSidebar = () => {
    setIsAllSidebarVisible(false);
  };

  return (
    <div
      className={`z-20 absolute top-0 left-0 md:left-full slideEffect ease-in-out bg-background px-[40px] py-[25px] w-screen md:w-[250px] h-full ${!isVisible && "translate-y-full"} flex flex-col items-start justify-start gap-3`}
    >
      <div className={"w-full pb-3"}>
        <IoMdArrowRoundBack
          size={32}
          className={"opacity-100 md:opacity-0 md:pointer-events-none"}
          onClick={handleCloseNestedSidebar}
        />
      </div>
      {make &&
        redirectLinks[make].map((link) => (
          <div
            className={"w-full flex items-center py-3 hoverEffect"}
            key={link.url}
          >
            <Link href={link.url} onClick={handleCloseAllSidebar}>
              {link.label}
            </Link>
          </div>
        ))}
    </div>
  );
}
