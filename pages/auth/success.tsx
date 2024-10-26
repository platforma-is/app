import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]";
import { SigninLayout } from "@/shared/ui-kit/layouts/SigninLayout/SigninLayout";
import { SigninBody } from "@/components/auth/signin/SigninBody";
import { AXIOS_INSTANCE } from "@/shared/api/mutator/custom-instance";
// import {} from '@/shared/api/mutator'
// import axios from "axios";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SigninLayout>
      <SigninBody providers={providers as never} />
    </SigninLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, options);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!

  if (session && !!session.user) {
      const userCreation = AXIOS_INSTANCE.post('/users/add', session.user);
      userCreation.then(r => console.log(r)).catch(err => console.error(err)).finally(() => {});
      // return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
