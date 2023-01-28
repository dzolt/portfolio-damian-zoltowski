import { Resume } from "./../../typings.d";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == "resume"][0] {
        name {
            asset-> {
                _id,
                url
            }
        } 
    }
`;

type Data = {
  resume: Resume;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const resume: Resume = await sanityClient.fetch(query);

  res.status(200).json({ resume });
}
