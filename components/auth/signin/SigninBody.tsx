import classes from "@/shared/ui-kit/layouts/SigninLayout/SigninLayout.module.scss";
import { Button, Flex } from "@mantine/core";
import { signIn } from "next-auth/react";
import { TProvider } from "@/shared/types";

type SigninBodyProps = {
  providers: TProvider;
};

export const SigninBody = ({ providers }: SigninBodyProps) => {
  return (
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
  );
};
