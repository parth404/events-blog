import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import EventList from "@/components/EventList";
import About from "@/components/About";

const query = groq`*[_type=='events']{
  ...,
} | order(_createdAt desc)`;
const aboutQuery = groq`*[_type=='about']{
  ...,
} | order(_createdAt desc)`;

export default async function HomePage() {
  const about = await client.fetch(aboutQuery);
  const events = await client.fetch(query);
  return (
    <div>
      <About about={about} />
      <EventList events={events} />
    </div>
  );
}
