import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TransitionAnimation from "@/components/TransitionAnimation";

export const metadata: Metadata = {
  title: "Strada",
  description: "A Showcase Of Driving Legacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-w-[360px] min-h-[640px]"}>
        <Navbar>
          <TransitionAnimation />
          {children}
        </Navbar>
      </body>
    </html>
  );
}
