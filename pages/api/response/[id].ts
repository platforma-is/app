import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { options } from "../auth/[...nextauth]";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const responseId = req.query.id;

  const session = await getServerSession(req, res, options);

  if (req.method === "DELETE") {
    if (session) {
      const response = await prisma.response.delete({
        where: { id: String(responseId) },
      });
      res.json(response);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } else {
    res.status(400).send({ message: "request error" });
  }
}
