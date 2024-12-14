import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { Account } from "@prisma/client";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

export const options: NextAuthOptions = {
  debug: true,
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
      console.log('jwt: ', token, trigger, session)
      if (trigger === "update") token.name = session.user.name
      return token
    },
    async signIn(params) {
      const email = params.profile?.email || params.account?.email || params.user?.email;
      const name = params.profile?.name || params.profile?.real_name || params.user?.name;
      const image = params.profile?.image || params.user?.image;

      let existingUser;

      try {
        existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              { email, phone: params.profile?.phone },
              { email }
            ]
          },
        });
      } catch (e) {
        existingUser = null
      }

      if (existingUser == null) {
        const user = await prisma.user.create({
          data: {
            name,
            email,
            image,
            phone: params.profile?.phone,
          },
        });

        if (params.account?.provider === 'vk') {
          delete params.account.email;
          delete params.account.user_id;
        }

        const newAccount = await prisma.account.create({
          data: {
            ...params.account as any,
            user: {
              connect: {
                email,
              }
            }
          }
        })

        params.user = user;
      } else {
        let userAccount;
        try {
          userAccount = await prisma.account.findFirst({
            where: {
              userId: existingUser?.id,
              provider: params.account?.provider
            }
          });
        } catch (e) {
          userAccount = null;
        }

        if (userAccount === null) {
          try {
            if (params.account?.provider === 'vk') {
              delete params.account.email;
              delete params.account.user_id;
            }

            const newAccount = await prisma.account.create({
              data: {
                ...params.account as any,
                user: {
                  connect: {
                    email
                  }
                }
              }
            })
          } catch (e) {
            console.log('Error creating account: ', e)
          }
        }
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
