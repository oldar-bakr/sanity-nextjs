import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "84yawb45",
  dataset: "production",
  apiVersion: "2024-05-13",
  useCdn: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  });
}
