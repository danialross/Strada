export type Make = "toyota" | "honda" | "porsche" | null;

export type SectionData = {
  header: string;
  body: string;
  src: string;
  alt: string;
  imagePosition: "left" | "right";
};

export type RedirectLinkData = {
  url: string;
  label: string;
};

export type ImageViewerProps = {
  src: string;
  alt: string;
  position?: "object-left" | "object-right";
  threshold?: number; // between 0 - 1 that needs to be on screen to start animation
  animationDelayOnWeb: number;
  animationDelayOnMobile: number;
  hasIntroAnimationOnWeb: boolean;
  hasIntroAnimationOnMobile: boolean;
};
