import Header from "@/components/Header";
import { Suspense } from "react";
import Loader from "./Loader";
import "../globals.css";

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
      <Suspense fallback={<Loader />}>
        <body className="bg-transparent font-poppins">
          <Header />
          {children}
        </body>
      </Suspense>
    </html>
  );
}
