// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Works } from "../../types/types";

const query = '*[_type == "works"] | order(_createdAt desc)';

type Data = {
  works: Works[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const works = await sanityClient.fetch(query);

    res.status(200).json({ works });
  } catch (error) {
    console.log(error);
  }
}
