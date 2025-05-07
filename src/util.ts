import { INTRO_DELAY } from "@/constants";

export const getAnimationDelay = (
  delayOnWeb: number,
  delayOnMobile: number,
  hasIntroDelayOnWeb: boolean,
  hasIntroDelayOnMobile: boolean,
): number => {
  const isOnMobile = typeof window !== "undefined" && window.innerWidth < 768;

  if (isOnMobile) {
    if (hasIntroDelayOnMobile) {
      return delayOnMobile + INTRO_DELAY;
    }
    return delayOnMobile;
  }

  // On Web
  if (hasIntroDelayOnWeb) {
    return delayOnWeb + INTRO_DELAY;
  }

  return delayOnWeb;
};
