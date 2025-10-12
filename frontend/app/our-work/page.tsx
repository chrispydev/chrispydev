"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { motion } from "framer-motion";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Header from "@/components/header";

// ✅ Image URL builder
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).url()
    : "/placeholder.png";

// ✅ GROQ query for works
const WORK_QUERY = `*[_type == "works"] | order(_createdAt desc)[0...4]{
  _id,
  title,
  slug,
  link,
  description,
  imgUrl
} | order(_createdAt desc)`;

export default function WorkHome() {
  const [works, setWorks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const data = await client.fetch(WORK_QUERY);
        setWorks(data);
      } catch (err) {
        console.error("Failed to fetch works:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchWorks();
  }, []);


  if (loading) {
    return (
      <Wrapper>
        <div className="text-center py-10 text-gray-500">Loading works...</div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Header headerText="Transforming Ideas into Impact." typewriter={['A showcase of the digital products we’ve built for clients worldwide.']} />
      <Wrapper>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-4xl font-bold text-center mb-6 md:text-4xl "
          >
            Case Studies
          </motion.h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Each project showcases our expertise and the measurable outcomes we’ve delivered.
          </p>


          <div className="grid sm:grid-cols-2 gap-8">
            {works.map((work: any, i: number) => (
              <motion.div
                key={work._id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className=" rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  width={300}
                  height={200}
                  src={work.imgUrl ? urlFor(work.imgUrl) : "/placeholder.png"}
                  alt={work.title}
                  className="w-full h-[150px] object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {work.description?.slice(0, 78)}...
                  </p>
                  {work.slug?.current && (
                    <Link
                      href={`/our-work/${work.slug.current}`}
                      className="text-indigo-600 font-medium hover:underline"
                    >
                      View Project →
                    </Link>
                  )}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>

    </main>
  );
}

