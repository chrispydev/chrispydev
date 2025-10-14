// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { testimonials } from '../../types/types';

const query = '*[_type == "testimonials"]';

type Data = {
  testimonials: testimonials[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const testimonials = await sanityClient.fetch(query);

    res.status(200).json({ testimonials });
  } catch (error) {
    console.log(error);
  }
}
