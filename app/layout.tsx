import type { Metadata } from "next";
import "./globals.css";
import fonts from "@/components/fonts";
import NavBar from "@/components/navigation/NavBar";

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
        <NavBar />
        {children}
        <footer className="">Footer</footer>
      </body>
    </html>
  );
}
