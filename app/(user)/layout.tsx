import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fat Owl DJ Events",
  description:
    "Fat Owl DJ Events, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}
