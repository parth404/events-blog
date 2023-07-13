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
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import { customTheme } from "./theme";

export default defineConfig({
  basePath: "/studio",
  name: "Fat_Owl_Content_Studio",
  title: "Fat Owl Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: [events, about] },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: customTheme,
});
