import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]";
import { SigninLayout } from "@/shared/ui-kit/layouts/SigninLayout/SigninLayout";
import classes from "@/shared/ui-kit/layouts/SigninLayout/SigninLayout.module.scss";
import { Button, Flex } from "@mantine/core";
export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SigninLayout>
      <Flex className={classes.logo_container} direction={"row"}>
        <img className={classes.logo_img} src={"/assets/icons/platforma.svg"} />
        <Flex className={classes.text_container} direction={"column"}>
          <h3 className={classes.logo_title}>Вход в Платформу</h3>
          <h3>Пока через соцсети, скоро будет по почте</h3>

          <Flex
            className={classes.auth_container}
            direction={"column"}
            mt={"2.5rem"}
            rowGap={"1rem"}
          >
            {Object.values(providers).map((provider) => {
              return (
                <Button
                  className={classes.auth_btn}
                  color={"black"}
                  variant={"outline"}
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                >
                  {provider.name} ID
                </Button>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </SigninLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, options);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
