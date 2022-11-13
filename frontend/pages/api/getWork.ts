// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { WorkProps } from '../../types/types';

const query = '*[_type == "works"]';

type Data = {
  work: WorkProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const work = await sanityClient.fetch(query);

  res.status(200).json({ work });
}
