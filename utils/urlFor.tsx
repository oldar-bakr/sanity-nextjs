import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/src/sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
