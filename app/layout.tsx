import type { Metadata } from "next";
import "./globals.css";
import fonts from "@/components/fonts";
import NavBar from "@/components/navigation/NavBar";
import GlobalFooter from "@/components/GlobalFooter";
import LoginForm from "@/components/login/LoginForm";

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
        <LoginForm />
        <NavBar />
        {children}

        <GlobalFooter />
      </body>
    </html>
  );
}
