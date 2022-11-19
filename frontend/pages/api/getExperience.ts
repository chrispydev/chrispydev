// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { ExperienceProps } from '../../types/types';

const query = '*[_type == "experiences"]';

type Data = {
  expreiences: ExperienceProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const expreiences = await sanityClient.fetch(query);

  res.status(200).json({ expreiences });
}
