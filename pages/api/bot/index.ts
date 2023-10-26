import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
  return res.status(401).send({ message: "You looks like a bot" });
}
