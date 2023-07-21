import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import EventList from "@/components/EventList";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const query = groq`*[_type=='events']{
  ...,
} | order(date desc)`;
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
    <div className="animate-bganimation">
      <Hero events={events} />
      <About about={about} />
      <Gallery gallery={gallery} />
      <EventList events={events} />
      <Contact />
      <Footer />
    </div>
  );
}
