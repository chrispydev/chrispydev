import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";

import Heading from "@/components/heading";
import { client } from "@/sanity/client";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import FinalCTA from "@/components/final-cta";

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
  const { slug } = await params;

  const work = await client.fetch(WORK_QUERY, { slug });

  if (!work) {
    return (
      <section className="p-8">
        <h1 className="text-xl font-bold">Work not found</h1>
      </section>
    );
  }

  // ✅ Handle multiple images
  const images = work.images || [];
  const firstImage = images.length > 0 ? images[0] : null;
  const restImages = images.slice(1);

  return (
    <section>
      <Wrapper>
        <Heading text={work.title || "Untitled Work"} underline />

        {/* ✅ Top main image */}
        {firstImage && (
          <Image
            width={1200}
            height={800}
            src={urlFor(firstImage)?.url() || ""}
            alt={work.title || "Work image"}
            className="w-full rounded-lg shadow-md my-6 object-cover"
          />
        )}

        {/* ✅ Work description */}
        <div className="prose space-y-4 text-sm link--color">
          {Array.isArray(work.body) && <PortableText value={work.body} />}
        </div>

        {/* ✅ Bottom image gallery */}
        {restImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {restImages.map((img: SanityImageSource, index: number) => (
              <Image
                key={index}
                width={600}
                height={400}
                src={urlFor(img)?.url() || ""}
                alt={`${work.title} image ${index + 2}`}
                className="rounded-lg shadow-sm object-cover"
              />
            ))}
          </div>
        )}
      </Wrapper>

      <FinalCTA />
    </section>
  );
}

