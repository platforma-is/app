import classes from "@/shared/ui-kit/layouts/SigninLayout/SigninLayout.module.scss";
import { Button, Flex } from "@mantine/core";
import { signIn } from "next-auth/react";
import githubIcon from "@/public/assets/icons/socials/github.svg";
import yandexIcon from "@/public/assets/icons/socials/yandex.svg";
import vkIcon from "@/public/assets/icons/socials/vk.svg";
import { FC } from "react";
import { TProvider } from "@/index";

type SigninBodyProps = {
  providers: TProvider;
};

type SocialIconProps = {
  src: string;
};

const SocialIcon: FC<SocialIconProps> = ({ src }) => {
  return (
    <div
      className={classes.auth_btn_icon}
      style={{ background: `url(${src})` }}
    />
  );
};

export const SigninBody = ({ providers }: SigninBodyProps) => {
  const icons = {
    github: githubIcon.src,
    vk: vkIcon.src,
    yandex: yandexIcon.src,
  };

  const callbackUrl = process.env.AUTH_SUCCESS_CALLBACK_URL;

  return (
    <Flex className={classes.logo_container} direction={"row"}>
      <img
        alt={"platforma"}
        className={classes.logo_img}
        src={"/assets/icons/platforma.svg"}
      />
      <Flex className={classes.text_container} direction={"column"}>
        <h3 className={classes.logo_title}>Вход в Платформу</h3>
        <h3>Пока через соцсети, скоро будет по почте</h3>

        <Flex
          className={classes.auth_container}
          direction={"column"}
          mt={"2.5rem"}
          rowGap={"1rem"}
        >
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <Button
                  className={classes.auth_btn}
                  color={"black"}
                  variant={"outline"}
                  onClick={async () => {

                    const sign = signIn(provider.id, {
                      callbackUrl,
                    })
                  }
                  }
                  key={provider.name}
                  leftSection={<SocialIcon src={icons[provider.id]} />}
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
