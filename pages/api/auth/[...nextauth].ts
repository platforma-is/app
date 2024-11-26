import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    VkProvider({
      clientId: process.env.VK_ID ?? "",
      clientSecret: process.env.VK_CLIENT_SECRET ?? "",
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID ?? "",
      clientSecret: process.env.YANDEX_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    jwt({ token, trigger, session }) {
      if (trigger === "signIn" || trigger === "signUp") {
        console.log("JWT: ", token, trigger, session);
      }
      return token;
    },
    async signIn(params) {
      console.info("signIn: ", params);

      const existingUser = await prisma.user.findUnique({
        where: {
          email: params.profile?.email,
        },
      });

      if (existingUser == null) {
        const user = await prisma.user.create({
          data: {
            name: params.profile?.name,
            email: params.profile?.email,
            image: params.profile?.image,
          },
        });

        params.user = user;
      } else {
        params.user = existingUser;
      }

      return true;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin",
  },
};
