"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <div className="fixed top-0 flex justify-between items-center h-14 w-full max-w-[1920px] mx-auto uppercase z-50 md:mix-blend-difference">
        <div className=" text-white">
          <Link className="flex items-center m-4" href="/">
            <Image
              className="rounded-full"
              src="/OWLNOBG.png"
              width={30}
              height={30}
              alt="logo"
            />
            <h1 className="px-2 text-xl w-full font-bold">FAT OWL.</h1>
          </Link>
        </div>
        <div>
          <ul className="hidden right-2 items-center m-4 md:flex text-white">
            <a href="/#about">
              <li className="p-4">About</li>
            </a>
            <a href="/#gallery">
              <li className="p-4">Gallery</li>
            </a>
            <a href="/#events">
              <li className="p-4">Events</li>
            </a>
            <a href="/#contact">
              <li className="p-4">Contact</li>
            </a>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden z-50 mix-blend-difference"
        >
          {nav ? (
            <XMarkIcon className="h-6 w-6 text-white mr-2" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white mr-2" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed flex left-0 top-0 h-full w-full z-30 border-r border-r-gray-900 ease-in-out duration-700"
              : "fixed left-[-100%] top-0 w-[60%] z-50 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
          }
        >
          <div className="w-[60%] bg-[#0e0d0d]">
            <Link className="flex items-center m-4" href="/">
              <Image
                className="rounded-full"
                src="/logo.png"
                width={50}
                height={50}
                alt="logo"
              />
              <h1 className="text-2xl w-full font-bold text-white">FAT OWL.</h1>
            </Link>
            <ul className="uppercase p-4 text-white">
              <li className="p-4 border-b border-gray-600">Events</li>
              <li className="p-4 border-b border-gray-600">Gallery</li>
              <li className="p-4 border-b border-gray-600">About</li>
              <li className="p-4">Contact</li>
            </ul>
          </div>
          <div className=" w-[40%] bg-black/50 "></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
