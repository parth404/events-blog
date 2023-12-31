/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */
// import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion } from "./lib/sanity.client";
import events from "./schemas/events";
import about from "./schemas/about";
import gallery from "./schemas/gallery";
import StudioNavbar from "./components/StudioNavbar";
import { customTheme } from "./theme";
import socials from "./schemas/socials";

export default defineConfig({
  basePath: "/studio",
  name: "Technodelic_Content_Studio",
  title: "Technodelic Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: [events, about, gallery, socials] },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme: customTheme,
});
