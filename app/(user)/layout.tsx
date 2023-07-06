import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

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
    <html lang="en">
      <body className={inter.className}>
        <div className="bg h-screen w-full bg-[url('http://assets.iceable.com/img/noise-transparent.png')] bg-repeat">
          <Header />
          <Banner />
          {children}
        </div>
      </body>
    </html>
  );
}
