import Link from "next/link";

export default function notFound() {
  return (
    <div
      className={
        "h-[92vh] bg-primary flex flex-col items-center justify-center mobilePadding gap-10"
      }
    >
      <span className={"bannerText text-center"}>
        The page you're looking for doesn’t exist.
      </span>
      <Link
        className={
          "bg-secondary text-primary rounded-lg p-4 hover:scale-125 animateMovement"
        }
        href="/"
      >
        Go Home
      </Link>
    </div>
  );
}
