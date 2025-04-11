import type { Metadata } from "next";
import "./globals.css";


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
      <body
      >
        {children}
      </body>
    </html>
  );
}
