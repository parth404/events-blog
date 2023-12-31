"use client";

// import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "../../lib/sanity.client";

function onPublicAccessOnly() {
  throw new Error(`Log in to enter preview mode`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Missing projectId or dataset. Check your sanity.json or.env`
  );
}

export const usePreview = {
  projectId,
  dataset,
  onPublicAccessOnly,
};
