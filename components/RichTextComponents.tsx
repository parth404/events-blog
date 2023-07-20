import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-60 md:h-[40rem] m-10 mx-auto shadow-md shadow-black">
          <Image
            className="object-cover object-center brightness-75 sepia-[30%]"
            src={urlFor(value).url()}
            alt="event post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-5xl text-white py-10 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-2xl py-10 font-bold">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="py-2 contrast-125 tracking-wide first-letter:text-lg first-letter:font-bold first-letter:capitalize">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-white border-l-4 pl-5 py-5 my-5 contrast-125 tracking-wide first-letter:font-extrabold first-letter:text-white first-letter:text-xl">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline text-[#F7AB0A] decoration-[#F7AB0A] hover:decoration-white hover:text-white"
        >
          {children}
        </Link>
      );
    },
  },
};
