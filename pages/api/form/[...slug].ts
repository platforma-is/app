import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { options } from "../auth/[...nextauth]";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { slug } = req.query;
    const formId = slug[0];

    // DELETE /api/form/:id
    if (req.method === "DELETE") {
      const session = await getServerSession(req, res, options);

      if (session) {
        const result = await prisma.form.delete({
          where: { id: String(formId) },
        });

        res.json(result);
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    }
    // POST /api/form/:id
    else if (req.method === "POST") {
      if (typeof formId === "string" && req.body) {
        const form = await prisma.form.findFirst({
          where: { id: String(formId) },
        });

        if (form?.active) {
          const result = await prisma.response.create({
            data: {
              form: { connect: { id: formId } },
              data: req.body,
            },
          });

          res.json(result);
        } else {
          res
            .status(400)
            .send({ message: "form is not active or doesn't exist" });
        }
      } else {
        res.status(400).send({ message: "request error" });
      }
    }
    // PUT /api/form/:id
    else if (req.method === "PUT") {
      const session = await getServerSession(req, res, options);

      if (session) {
        switch (slug[1]) {
          case "active":
            await prisma.form.update({
              where: { id: String(formId) },
              data: { active: true },
            });
            break;
          case "unactive":
            await prisma.form.update({
              where: { id: String(formId) },
              data: { active: false },
            });
            break;
          default:
            res.status(400).send({ message: "request error" });
            break;
        }
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    } else {
      res.status(400).send({ message: "request error" });
    }
  } catch (e) {
    res.status(500).send({ message: "server error" });
  }
}
