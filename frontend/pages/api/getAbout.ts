// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity';
import { AboutProps } from '../../types/types';

const query = '*[_type == "abouts"]';

type Data = {
  abouts: AboutProps[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const abouts = await sanityClient.fetch(query);

  res.status(200).json({ abouts })
}
