import urlFor from "@/lib/urlFor";
import Image from "next/image";
// import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {
  about: Info[];
};

function About({ about }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {about.map((info) => (
          <div
            key={info._id}
            className="flex flex-col group cursor-pointer backdrop-blur-2xl bg-gray-100 md:rounded-2xl md:p-10 drop-shadow-lg hover:scale-105 ease-in duration-150"
          >
            <div className="relative w-[full] h-80 hover:drop-shadow-xl group-hover:scale-105 transition-transform duration-1000 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(info.hero_image).url()}
                alt={info.hero_image.alt}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
