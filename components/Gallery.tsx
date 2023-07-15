"use client";

import { useEffect } from "react";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

// let track = null;

type Props = {
  gallery: Gallery[];
};

function Gallery({ gallery }: Props) {
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

  return (
    <section
      draggable="false"
      className="min-h-screen min-w-screen relative px-5 mx-auto py-24 md:pb-40 md:px-10 xl:px-4 text-white font-poppins overflow-hidden"
    >
      <h2 className="md:mt-44 select-none text-[2.6rem]  md:text-6xl lg:text-7xl max-w-contentContainer mx-auto font-extrabold tracking-wide md:tracking-widest uppercase">
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
        className="mt-56 h-[screen] w-[350vmin] backdrop-blur-3xl absolute left-[10%] top-[50%] md:left-[50%] md:top-[20%]"
        draggable="false"
      >
        {gallery.map((galleryItem) => (
          <div
            key={galleryItem._id}
            className="relative w-[60vmin] h-[76vmin] md:w-[46vmin] md:h-[76vmin] group hover:drop-shadow-xl hover:scale-105 transition-transform duration-500 ease-out"
            draggable="false"
          >
            <Image
              src={urlFor(galleryItem.image).url()}
              className="image object-cover object-center w-full h-full"
              alt={galleryItem.alt}
              fill
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
