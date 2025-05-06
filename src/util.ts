import { INTRO_DELAY } from "@/constants";

export const getAnimationDelay = (delay: number): number => {
  // first item in mobile view based on design
  // first item will have to wait for intro animation because it is on screen but rest is not
  if (delay === 0) {
    return INTRO_DELAY;
  } else if (typeof window !== "undefined" && window.innerWidth > 768) {
    return delay + INTRO_DELAY;
  }
  return 0;
};
