import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "./types/banner.type";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  apiVersion: "2022-12-03",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image) => builder.image(source);
