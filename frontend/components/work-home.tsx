"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { motion } from "framer-motion";
import Heading from "./heading";
import Wrapper from "./wrapper";
import Image from "next/image";

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

interface Work {
  _id: string;
  title: string;
  link?: string;
  description?: string;
  imgUrl?: string;
  slug: { current: string }
}


export default function WorkHome() {
  const [works, setWorks] = useState<Work[]>([]);
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
    <Wrapper>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          <Heading text="Work" underline />
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {works.map((work: Work, i: number) => (
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
                {work.link && (
                  <Link
                    href={`/our-work/${work.slug.current}`}
                    target="_blank"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            View All Work
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

