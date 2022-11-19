// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';
import { SkillsProps } from '../../types/types';

const query = '*[_type == "skills"]';

type Data = {
  skills: SkillsProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
