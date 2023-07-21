import Header from "@/components/Header";
import "../globals.css";
import { Suspense } from "react";
import Loader from "./Loader";

export const metadata = {
  title: "Technodelic",
  description: "Technodelic, music events company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-transparent font-poppins">
        <Header />
        {children}
      </body>
    </html>
  );
}
