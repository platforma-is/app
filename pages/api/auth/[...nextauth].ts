import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

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
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};
