import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import EventList from "@/components/EventList";
import About from "@/components/About";
import Gallery from "@/components/Gallery";

const query = groq`*[_type=='events']{
  ...,
} | order(_createdAt desc)`;
const aboutQuery = groq`*[_type=='about']{
  ...,
} | order(_createdAt desc)`;

const imageQuery = groq`*[_type=='gallery']{
  ...,
} | order(_createdAt desc)`;

export default async function HomePage() {
  const about = await client.fetch(aboutQuery);
  const events = await client.fetch(query);
  const gallery = await client.fetch(imageQuery);
  return (
    <div>
      <About about={about} />
      <Gallery gallery={gallery} />
      <EventList events={events} />
    </div>
  );
}
