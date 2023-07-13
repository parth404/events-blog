import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  events: Event[];
};

function EventList({ events }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-24 grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {events.map((event) => (
          <ClientSideRoute
            key={event._id}
            route={`/events/${event.slug.current}`}
          >
            <div className="flex flex-col group cursor-pointer backdrop-blur-2xl bg-gray-100 md:rounded-2xl md:p-10 drop-shadow-lg hover:scale-105 ease-in duration-150">
              <div className="relative w-[full] h-80 hover:drop-shadow-xl group-hover:scale-105 transition-transform duration-1000 ease-out">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(event.hero_image).url()}
                  alt={event.title}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold text-ellipsis">{event.title}</p>
                    <p>
                      {new Date(event._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    <div className="text-center text-white px-3 py-1 text-sm font-semibold">
                      <p className="font-bold">{event.venue}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 px-5 flex-1">
                <p className="underline text-lg font-bold">{event.title}</p>
                <p className="line-clamp-2 text-gray-800">
                  {event.description}
                </p>
              </div>

              <p className="px-5 my-5 font-bold text-gray-700 flex items-center group-hover:underline">
                Read More
                <ArrowLongRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default EventList;
