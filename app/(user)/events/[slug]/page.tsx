import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

async function Events({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='events' && slug.current == $slug][0]
    {...}
  `;

  const event: Post = await client.fetch(query, { slug });

  return (
    <article className="px-4 py-28 h-full md:max-w-7xl mx-auto text-white font-poppins">
      <section className="space-y-2 h-40 md:h-[20rem] text-white">
        <div className="relative md:min-h-full flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(event.hero_image).url()}
              alt={event.alt}
              fill
            />
          </div>
          <section className=" p-5 md:p-8 bg-black/20 w-full text-white z-10 backdrop-blur-sm backdrop-brightness-75">
            <div className="flex flex-col md:flex-row my-5 md:my-24 justify-between gap-y-3 md:gap-y-5">
              <div>
                <h1 className="text-xl md:text-4xl font-extrabold font-poppins capitalize md:pb-4">
                  {event.title}
                </h1>
                <p className="text-sm md:text-xl">{event.date}</p>
              </div>
              <div className="text-sm md:text-2xl font-extrabold font-poppins capitalize md:pb-4">
                <p>{event.venue}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={event.content} components={RichTextComponents} />
    </article>
  );
}

export default Events;
