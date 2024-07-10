import type { Metadata } from "next";
import "./globals.css";
import "../styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | justcgh9",
    default: "Portfolio | justcgh9",
  },
  authors: [{ name: "Alisher Kabardiyadi" }],
  keywords: [
    "Portfolio",
    "Front-end",
    "Frontend",
    "Alisher",
    "Kabardiyadi",
    "Next.js",
    "React",
  ],
  icons: {
    icon: "@/assets/photos/dino.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
