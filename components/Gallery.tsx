"use client";

import { useState, useEffect } from "react";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  XMarkIcon,
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

// let track = null;

type Props = {
  gallery: Gallery[];
};

function Gallery({ gallery }: Props) {
  const [image, setImage] = useState("/");
  const [popUp, setPopUp] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const track = document.getElementById("image-track");

      if (!track) {
        // Handle the case where track is null or not found
        return;
      }

      const handleOnDown = (e) => {
        track.dataset.mouseDownAt = e.clientX;
      };

      const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      };

      const handleOnMove = (e) => {
        if (!track || track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

        let percentage = (mouseDelta / maxDelta) * -100;
        percentage = isNaN(percentage) ? 0 : percentage;

        const nextPercentageUnconstrained =
            parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -100
          );

        track.dataset.percentage = nextPercentage.toString();

        const translateX = isNaN(nextPercentage) ? 0 : `${nextPercentage}%`;

        track.animate(
          [
            {
              transform: `translate(${translateX}, -50%)`,
            },
          ],
          { duration: 1200, fill: "forwards" }
        );

        const images = track.getElementsByClassName("image");
        for (const image of Array.from(images)) {
          image.animate(
            [
              {
                objectPosition: `${100 + nextPercentage}% center`,
              },
            ],
            { duration: 1200, fill: "forwards" }
          );
        }
      };

      window.addEventListener("mousedown", handleOnDown);
      window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
      window.addEventListener("mouseup", handleOnUp);
      window.addEventListener("touchend", handleOnUp);
      window.addEventListener("mousemove", handleOnMove);
      window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

      return () => {
        window.removeEventListener("mousedown", handleOnDown);
        window.removeEventListener("touchstart", (e) =>
          handleOnDown(e.touches[0])
        );
        window.removeEventListener("mouseup", handleOnUp);
        window.removeEventListener("touchend", handleOnUp);
        window.removeEventListener("mousemove", handleOnMove);
        window.removeEventListener("touchmove", (e) =>
          handleOnMove(e.touches[0])
        );
      };
    }
  }, []);

  useEffect(() => {
    if (imageKey > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }

    if (imageKey < gallery.length - 1) {
      setShowRight(true);
    } else {
      setShowRight(false);
    }
  }, [imageKey, setShowLeft, setShowRight]);

  const clickHandler = (key: number, image: string) => {
    setImage(image);
    setImageKey(key);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setImage("/");
  };

  const slideHandler = (name: string) => {
    let key = imageKey;
    if (
      (name === "right" && key === gallery.length - 1) ||
      (name === "left" && key === 0)
    ) {
      setPopUp(false);
      return;
    } else if (name === "right") {
      setImage(urlFor(gallery[key + 1].image).url());
      setImageKey(key + 1);
    } else if (name === "left") {
      setImage(urlFor(gallery[key - 1].image).url());
      setImageKey(key - 1);
    }
  };

  return (
    <section
      draggable="false"
      className="py-12 min-h-[35rem] md:min-h-screen md:min-w-screen relative px-5 mx-auto md:py-24 md:pb-40 md:px-10 xl:px-4 text-white font-poppins overflow-hidden"
    >
      <h2 className="md:mt-44 select-none text-3xl  md:text-6xl lg:text-7xl max-w-contentContainer mx-auto font-extrabold tracking-wide md:tracking-widest uppercase">
        GALLERY
      </h2>
      <div className="select-none text-2xl pb-12 md:pb-24 md:text-4xl lg:text-6xl max-w-contentContainer mx-auto font-extrabold tracking-wide md:tracking-widest uppercase">
        <span className="md:hidden about-title">touch & swipe</span>
        <div className="hidden md:flex gap-2 pt-8 items-center">
          <ChevronDoubleLeftIcon width={50} className="chevron" />
          <div>
            <h2 className="hidden md:block about-title">drag</h2>
          </div>
        </div>
      </div>
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        className="md:mt-56 h-[screen] w-[350vmin] backdrop-blur-3xl absolute left-[10%] top-[60%] md:left-[50%] md:top-[20%]"
        draggable="false"
      >
        {gallery.map((galleryItem, key) => {
          const url = urlFor(galleryItem.image).url();
          return (
            <div
              key={galleryItem._id}
              className="relative w-[60vmin] h-[76vmin] md:w-[46vmin] md:h-[76vmin] group hover:drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out"
              draggable="false"
              onClick={() => clickHandler(key, url)}
            >
              <Image
                src={url}
                className="image object-none md:object-cover object-center w-full h-full cursor-pointer"
                alt={galleryItem.alt}
                fill
                draggable="false"
              />
            </div>
          );
        })}
      </div>
      {popUp ? (
        <div
          className="fixed h-full w-full top-0 left-0 z-50 bg-black overflow-hidden"
          draggable={false}
        >
          <div className="absolute top-[20%] left-[5%] md:top-[10%] md:left-[10%] w-[90%] h-[50%] md:w-[80%] md:h-[80%] select-none">
            <Image
              src={image}
              alt="pop"
              className="object-cover object-center "
              fill
            />
            <XMarkIcon
              width={30}
              className="absolute -right-4 -top-4 cursor-pointer  text-gray-400 hover:text-white hover:scale-125 transition-transform duration-500"
              onClick={closePopUp}
            />
            {showRight && (
              <ArrowLongRightIcon
                width={40}
                className="absolute top-[50%] -right-6 cursor-pointer text-gray-400 hover:text-white hover:scale-125 transition-transform duration-500"
                onClick={() => slideHandler("right")}
              />
            )}
            {showLeft && (
              <ArrowLongLeftIcon
                width={40}
                className="absolute top-[50%] -left-6 cursor-pointer text-gray-400 hover:text-white hover:scale-125 transition-transform duration-500"
                onClick={() => slideHandler("left")}
              />
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Gallery;
