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
  animationDelayOnWeb: number;
  animationDelayOnMobile: number;
  hasIntroAnimationOnWeb: boolean;
  hasIntroAnimationOnMobile: boolean;
};
