import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

function Banner() {
  return (
    <div className=" text-white bg-slate-500">
      <div className=" flex justify-between py-32">
        <div className="mt-12">
          <ArrowLongLeftIcon className="h-6 w-6 text-[#F7AB0A] ml-2" />
        </div>
        <div className=" w-1/2 border-2 rounded-xl space-x-12">
          <h1 className="text-3xl m-12">Event's Name</h1>
          <h2 className="text-3xl">Artist Name</h2>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
        <div className="text-right mt-12">
          <ArrowLongRightIcon className="h-6 text-[#F7AB0A] mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
