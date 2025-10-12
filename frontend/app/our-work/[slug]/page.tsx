import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, type SanityDocument } from "next-sanity";

import Heading from "@/components/heading";
import { client } from "@/sanity/client";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

const WORK_QUERY = `*[_type == "works" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch work by link (slug)
  const { slug } = await params; // ✅ Await params first

  const work = await client.fetch(WORK_QUERY, { slug });

  // Handle missing result
  if (!work) {
    return (
      <section className="p-8">
        <h1 className="text-xl font-bold">Work not found</h1>
      </section>
    );
  }

  // Optional image
  const imageUrl = work.imgUrl ? urlFor(work.imgUrl)?.url() : null;

  return (
    <section>
      <Wrapper>
        <Heading text={work.title || "Untitled Work"} underline />

        {imageUrl && (
          <Image
            width={800}
            height={600}
            src={imageUrl}
            alt={work.title || "Work image"}
            className="w-full rounded-lg shadow-md my-6"
          />
        )}

        <div className="prose space-y-4 text-sm">
          {Array.isArray(work.body) && <PortableText value={work.body} />}
        </div>
      </Wrapper>
    </section>
  );
}

