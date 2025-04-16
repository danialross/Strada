import { MdOutlineClear } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NestedSidebar from "@/components/NestedSidebar";
import Link from "next/link";

type SidebarProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ isVisible, setIsVisible }: SidebarProps) {
  const [isHondaSidebarOpen, setIsHondaSidebarOpen] = useState(false);
  const [isToyotaSidebarOpen, setIsToyotaSidebarOpen] = useState(false);
  const [isPorscheSidebarOpen, setIsPorscheSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    handleCloseNestedSidebar();
    setIsVisible(false);
  };

  const handleOpenNestedSidebar = (
    setter: Dispatch<SetStateAction<boolean>>,
  ) => {
    // check if nested sidebar is already open and close the old one then opens the new one
    handleCloseNestedSidebar();
    setter(true);
  };

  const handleCloseNestedSidebar = () => {
    setIsHondaSidebarOpen(false);
    setIsPorscheSidebarOpen(false);
    setIsToyotaSidebarOpen(false);
  };

  //closes nested sidebar if the main is closed
  useEffect(() => {
    if (!isVisible) {
      handleCloseNestedSidebar();
    }
  }, [isVisible]);

  return (
    <div
      className={`slideEffect fixed z-2000 bg-white ${isVisible ? "translate-0" : "-translate-x-full"} top-0 left-0 px-[40px] py-[25px] text-primary flex flex-col gap-3 justify-start items-center w-full md:w-[250px] h-screen`}
    >
      <div className={"w-full pb-3"}>
        <MdOutlineClear
          size={32}
          className={"-translate-x-2 hoverEffect"}
          onClick={handleCloseSidebar}
        />
      </div>
      <div className={"w-full flex items-center py-3 hoverEffect"}>
        <button
          className={"w-full text-start"}
          onClick={
            !isHondaSidebarOpen
              ? () => handleOpenNestedSidebar(setIsHondaSidebarOpen)
              : () => setIsHondaSidebarOpen(false)
          }
        >
          Honda
        </button>
        <FaCaretRight />
      </div>
      <div className={"w-full flex items-center py-3 hoverEffect"}>
        <button
          className={"w-full text-start"}
          onClick={
            !isToyotaSidebarOpen
              ? () => handleOpenNestedSidebar(setIsToyotaSidebarOpen)
              : () => setIsToyotaSidebarOpen(false)
          }
        >
          Toyota
        </button>
        <FaCaretRight />
      </div>
      <div
        className={"w-full flex justify-between items-center py-3 hoverEffect"}
      >
        <button
          className={"w-full text-start"}
          onClick={
            !isPorscheSidebarOpen
              ? () => handleOpenNestedSidebar(setIsPorscheSidebarOpen)
              : () => setIsPorscheSidebarOpen(false)
          }
        >
          Porsche
        </button>
        <FaCaretRight />
      </div>
      <Link
        className={"w-full text-start py-3 hoverEffect"}
        href={"/about"}
        onClick={handleCloseSidebar}
      >
        About
      </Link>
      <NestedSidebar
        make={"honda"}
        isVisible={isHondaSidebarOpen}
        setIsVisible={setIsHondaSidebarOpen}
        setIsAllSidebarVisible={handleCloseSidebar}
      />
      <NestedSidebar
        make={"toyota"}
        isVisible={isToyotaSidebarOpen}
        setIsVisible={setIsToyotaSidebarOpen}
        setIsAllSidebarVisible={handleCloseSidebar}
      />
      <NestedSidebar
        make={"porsche"}
        isVisible={isPorscheSidebarOpen}
        setIsVisible={setIsPorscheSidebarOpen}
        setIsAllSidebarVisible={handleCloseSidebar}
      />
    </div>
  );
}
