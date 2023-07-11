import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import EventList from "@/components/EventList";

const query = groq`*[_type=='events']{
  ...,
} | order(_createdAt desc)`;

export default async function HomePage() {
  const events = await client.fetch(query);
  // events.map((event: string) => (
  //   <div className="mx-auto text-center text-4xl text-white">
  //     <h1>{event}</h1>
  //   </div>
  // ));
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
