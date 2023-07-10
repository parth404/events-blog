import React from "react";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  ArrowLongDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="md:flex md:items-center md:justify-center bg-neutral-800 z-20">
      <div className="w-full h-full md:w-full md:h-full mx-auto">
        <div className="hidden md:flex [&:hover>div]:w-[18rem] [&>div:hover]:w-full">
          <div className="group relative shadow-lg shadow-black/30 md:h-[57rem] md:w-[18rem] overflow-hidden transition-all duration-1000">
            <img
              src="/concert-1854113_1280.jpg"
              alt=""
              className="h-full object-cover transition-all group-hover:scale-125 duration-[20000ms]"
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black group-hover:visible">
              <div className="absolute inset-x-0 max-w-4xl top-80 uppercase py-8">
                <div className="gap-3 text-white w-auto pl-6">
                  <h1 className="font-semibold text-6xl text-gray-100">
                    Event Name
                  </h1>
                  <h2 className="text-gray-300 font-semibold text-4xl pt-4">
                    - Artists Name
                  </h2>
                  <button className="mt-6 px-4 py-1 text-2xl text-gray-100 font-semibold rounded-full border border-white hover:mix-blend-lighten hover:text-black hover:bg-gray-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <img src="/OWLNOBG.png" className="h-12" />
                  <div className="hover:scale-105 duration-700">
                    <p className="font-semibold text-xl text-gray-100">
                      Music Festival
                    </p>
                    <p className="text-gray-300">SPRING 2023</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3 text-gray-200">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 512 512"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                      fill="currentColor"
                    />
                    <path
                      d="M207 353.8V157.4l145 98.2-145 98.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="currentColor"
                      d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative shadow-lg shadow-black/30 md:h-[57rem] md:w-[18rem] hover:w-full cursor-pointer overflow-hidden transition-all duration-1000">
            <img
              src="/music-7238254_1280.jpg"
              alt=""
              className="h-full object-cover transition-all group-hover:scale-125 duration-[20000ms]"
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black group-hover:visible">
              <div className="absolute inset-x-0 max-w-4xl top-80 uppercase py-8">
                <div className="gap-3 text-white w-auto pl-6">
                  <h1 className="font-semibold text-6xl text-gray-100">
                    Event Name
                  </h1>
                  <h2 className="text-gray-300 font-semibold text-4xl pt-4">
                    - Artists Name
                  </h2>
                  <button className="mt-6 px-4 py-1 text-2xl text-gray-100 font-semibold rounded-full border border-white hover:mix-blend-lighten hover:text-black hover:bg-gray-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <img src="/OWLNOBG.png" className="h-12" />
                  <div className="hover:scale-105 duration-700">
                    <p className="font-semibold text-xl text-gray-100">
                      Music Festival
                    </p>
                    <p className="text-gray-300">SPRING 2023</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3 text-gray-200">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 512 512"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                      fill="currentColor"
                    />
                    <path
                      d="M207 353.8V157.4l145 98.2-145 98.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="currentColor"
                      d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative shadow-lg shadow-black/30 md:h-[57rem] md:w-[18rem] hover:w-full cursor-pointer overflow-hidden transition-all duration-1000">
            <img
              src="/party-629241_1280.jpg"
              alt=""
              className="h-full object-cover transition-all group-hover:scale-125 duration-[20000ms]"
            />
            <div className="invisible absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black group-hover:visible">
              <div className="absolute inset-x-0 max-w-4xl top-80 uppercase py-8">
                <div className="gap-3 text-white w-auto pl-6">
                  <h1 className="font-semibold text-6xl text-gray-100">
                    Event Name
                  </h1>
                  <h2 className="text-gray-300 font-semibold text-4xl pt-4">
                    - Artists Name
                  </h2>
                  <button className="mt-6 px-4 py-1 text-2xl text-gray-100 font-semibold rounded-full border border-white hover:mix-blend-lighten hover:text-black hover:bg-gray-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <img src="/OWLNOBG.png" className="h-12" />
                  <div className="hover:scale-105 duration-700">
                    <p className="font-semibold text-xl text-gray-100">
                      Music Festival
                    </p>
                    <p className="text-gray-300">SPRING 2023</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3 text-gray-200">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 512 512"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                      fill="currentColor"
                    />
                    <path
                      d="M207 353.8V157.4l145 98.2-145 98.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="currentColor"
                      d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative shadow-lg shadow-black/30 md:h-[57rem] w-[18rem] cursor-pointer overflow-hidden transition-all duration-1000">
            <img
              src="/festival-3466251_1280.jpg"
              alt=""
              className="h-full object-cover transition-all group-hover:scale-125 duration-[20000ms]"
            />
            <div className="absolute invisible inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black group-hover:visible overflow-clip ">
              <div className="absolute inset-x-0 max-w-4xl top-80 uppercase py-8">
                <div className="gap-3 text-white w-auto pl-6">
                  <h1 className="font-semibold text-6xl text-gray-100">
                    Event Name
                  </h1>
                  <h2 className="text-gray-300 font-semibold text-4xl pt-4">
                    - Artists Name
                  </h2>
                  <button className="mt-6 px-4 py-1 text-2xl text-gray-100 font-semibold rounded-full border border-white hover:mix-blend-lighten hover:text-black hover:bg-gray-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute inset-x-5 bottom-6">
                <div className="flex gap-3 text-white">
                  <img src="/OWLNOBG.png" className="h-12" />
                  <div className="hover:scale-105 duration-700">
                    <p className="font-semibold text-xl text-gray-100">
                      Music Festival
                    </p>
                    <p className="text-gray-300">SPRING 2023</p>
                  </div>
                </div>
                <div className="flex justify-end gap-3 text-gray-200">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 512 512"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                      fill="currentColor"
                    />
                    <path
                      d="M207 353.8V157.4l145 98.2-145 98.2z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="currentColor"
                      d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    className="hover:scale-150 duration-500"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative shadow-lg shadow-black/30 md:h-[57rem] w-full cursor-pointer overflow-hidden transition-all duration-1000">
            <video
              autoPlay
              loop
              muted
              className="z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source src="/mixkit-dj-turntable-830.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute md:visible inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black Z-50 w-full">
              <div className="absolute ml-48 top-96">
                <div className="gap-3 text-white pl-6 overflow-hidden">
                  <h1 className="font-semibold text-6xl text-gray-100 mt-5 pb-2">
                    DARE TO DREAM
                  </h1>
                  <hr className="w-screen h-1 mix-blend-difference bg-gray-200 border-0 rounded mt-12 dark:bg-gray-700" />
                  <div className="flex">
                    <ArrowLongLeftIcon className="h-12 w-6 text-gray-100" />
                    <span className="text-[#c0c0c0b7] p-3">
                      EXPLORE RECENT EVENTS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex overflow-x-hidden text-[20rem] tracking-wide outline-title mix-blend-difference mt-28">
              <div className="py-12 animate-marquee whitespace-nowrap uppercase">
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap uppercase tracking-wide outline-title">
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
                <span className="mx-4 hover:text-white  decoration-8">
                  FAT OWL
                </span>
              </div>
            </div>
            <div className="absolute bottom-24 left-[-2rem] text-[#c0c0c0b7] mb-6 tranform rotate-90">
              <span>SCROLL DOWN</span>
            </div>
            <ArrowLongDownIcon className="absolute bottom-2 left-4 h-12 text-[#c0c0c0b7] w-6" />
            <div className="absolute inset-x-5 bottom-6">
              <div className="flex justify-end gap-3 text-gray-200">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  className="hover:scale-150 duration-500"
                >
                  <path
                    d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                    fill="currentColor"
                  />
                  <path
                    d="M207 353.8V157.4l145 98.2-145 98.2z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  className="hover:scale-150 duration-500"
                >
                  <path
                    fill="currentColor"
                    d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z"
                  />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  className="hover:scale-150 duration-500"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* mobile view  */}
        <div className="block md:hidden text-white uppercase">
          <video autoPlay loop muted className="z-10">
            <source src="/mixkit-dj-turntable-830.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute text-white h-[56.5vw] w-full pl-[16px] overflow-hidden top-20 bg-black/50 py-4">
            <h1 className="font-semibold text-3xl text-gray-100 mt-24">
              DARE TO DREAM
            </h1>
            <hr className="w-80 mt-4" />
            <div className="flex text-gray-100">
              <Link className="flex cursor-pointer w-full" href={"/"}>
                <span className="mt-3 pr-3">EXPLORE RECENT EVENTS</span>
                <ArrowLongRightIcon className="h-12 w-6 hover:w-8 duration-500" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
