import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "@/components/ClientSideRoute";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

type Props = {
  params: {
    slug: string;
  };
};

async function Events({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='events' && slug.current == $slug][0]
    {...,
    "prev": *[_type == 'events' && !(_id in path('events.**')) && _createdAt > ^._createdAt][0]{
      "slug": slug.current, title
    },
    "next": *[_type == 'events' && !(_id in path('events.**')) && _createdAt < ^._createdAt][0]{
      "slug": slug.current, title
    },
    }
  `;

  const event: Post = await client.fetch(query, { slug });

  // console.log(event.next.title, event.prev.title);
  return (
    <div className="w-full bg-black select-none">
      <article className="px-4 py-28 h-full md:max-w-contentContainer mx-auto text-[#c7c7c7] font-poppins">
        <section className="space-y-2 h-40 md:h-[20rem] md:mb-24">
          <div className="relative md:min-h-full flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full p-10">
              <Image
                className="object-cover object-center mx-auto brightness-75 sepia-[30%]"
                src={urlFor(event.hero_image).url()}
                alt={event.hero_image.alt}
                fill
              />
            </div>
            <section className=" p-5 md:p-8 bg-black/20 w-full z-10 backdrop-blur-sm backdrop-brightness-75">
              <div className="flex flex-col md:flex-row my-5 md:my-24 justify-between gap-y-3 md:gap-y-5">
                <div>
                  <h1 className="text-xl md:text-4xl font-extrabold text-white font-poppins capitalize md:pb-4">
                    {event.title}
                  </h1>
                  <p className="text-sm md:text-xl text-[#c7c7c7]">
                    {event.date}
                  </p>
                </div>
                <div className="text-sm md:text-2xl text-white font-extrabold font-poppins capitalize md:pb-4">
                  <p>{event.venue}</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <PortableText value={event.content} components={RichTextComponents} />
        <div className="flex w-full justify-between flex-row mt-20 text-[#c7c7c7] tracking-wide uppercase font-poppins md:text-lg">
          {event.prev && (
            <ClientSideRoute
              key={event._id}
              route={`/events/${event.prev.slug}`}
            >
              <div className="flex gap-2 md:gap-4 items-center hover:text-white hover:scale-105 transition-transform duration-500">
                <ArrowLongLeftIcon width={36} />
                <span>{event.prev.title}</span>
              </div>
            </ClientSideRoute>
          )}
          {event.next && (
            <ClientSideRoute
              key={event._id}
              route={`/events/${event.next.slug}`}
            >
              <div className="flex gap-2 md:gap-4 items-center hover:text-white hover:scale-105 transition-transform duration-500 ">
                <span>{event.next.title}</span>
                <ArrowLongRightIcon width={36} />
              </div>
            </ClientSideRoute>
          )}
        </div>
      </article>
    </div>
  );
}

export default Events;
