import type { Metadata } from "next";
import "./globals.css";
import fonts from "@/components/fonts";

export const metadata: Metadata = {
  title: "Puppy Love",
  description: "Find your Best Friend!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        {children}
        <footer className="">Footer</footer>
      </body>
    </html>
  );
}
