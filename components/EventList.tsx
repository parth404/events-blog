import urlFor from "@/lib/urlFor";
import Image from "next/image";

type Props = {
  events: Event[];
};

function EventList({ events }: Props) {
  return (
    <div>
      <hr className="border-gray-100 mb-10" />
      <div>
        {events.map((event) => (
          <div key={event._id}>
            {/* <Image
              src={
                "https://cdn.sanity.io/images/bj7p06j1/production/61dd0317d7ca584f6057bfa207a372d6ebdbd1da-960x538.jpg"
              }
              alt={event.title}
              fill
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
