import urlFor from "@/lib/urlFor";
import Image from "next/image";
// import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

type Props = {
  about: Info[];
};

function About({ about }: Props) {
  return about.map((info) => (
    <section
      id="about"
      className="min-h-screen relative px-5 max-w-contentContainer mx-auto py-10 md:py-40 md:px-10 xl:px-4 text-white font-poppins"
      draggable={false}
    >
      <h2 className="text-[2.4rem] pb-12 md:pb-0 md:text-6xl lg:text-8xl font-extrabold tracking-wide md:tracking-widest uppercase select-none">
        {info.title}
      </h2>
      <h3 className="about-title ease-in-out text-6xl font-extrabold tracking-wider uppercase select-none">
        {info.subtitle}
      </h3>
      <div className="block md:flex gap-4 md:gap-20 md:mt-16">
        <div className="md:w-1/2 py-12 md:text-xl tracking-wider select-none">
          <p className="py-2">{info.block1}</p>
          <p className="py-2">{info.block2}</p>
          <p className="py-2 font-extrabold text-3xl md:text-4xl">
            {info.block3}
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 md:h-[33rem] group mt-12">
          <div className="md:absolute w-full h-80 md:h-[36rem] -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <Image
                className="object-cover h-full"
                src={urlFor(info.hero_image).url()}
                alt={info.hero_image.alt}
                fill
              />
            </div>
          </div>
          <div className="hidden md:inline-flex w-full h-[36rem] border-2 border-gray-400 shadow-gray-400 shadow-sm group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
        </div>
      </div>
    </section>
  ));
}

export default About;
