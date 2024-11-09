"use client";
import React, { ReactNode } from "react";
import { signOut, useSession } from "next-auth/react";
import { SidebarLayout } from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout";
import { Button, Container, Tooltip } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout.module.scss";
import { IconLogout2, IconMoodSmile } from "@tabler/icons-react";
import { CreateModalSidebar } from "@/components/global/CreateModalSidebar";
import Router from "next/router";
import { useDisclosure } from "@mantine/hooks";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

interface SibebarProps {
  menuContent?: ReactNode;
}

export const Sidebar: React.FC<SibebarProps> = ({ menuContent }) => {
  const { data: sessionData, status } = useSession();
  const [opened, { toggle }] = useDisclosure(false);
  const { height } = useWindowSize();

  const onLogoutClick = async () => {
    await Router.replace("/").then(async () => {
      await signOut();
    });
  };

  const render = () => {
    if (status === "loading") {
      return <></>;
    }

    if (!sessionData) {
      return <></>;
    }

    if (sessionData) {
      return (
        <SidebarLayout>
          <Container sx={{ height }} className={classes.sidebar_content}>
            <h3 className={classes.logo_title}>Формы</h3>
            <Button
              onClick={() => toggle()}
              className={classes.create_form_btn}
              leftSection={<img src={"/assets/icons/Plus.svg"} alt={"plus"} />}
              variant={"transparent"}
            >
              Создать...
            </Button>
            {menuContent}
          </Container>
          <Container className={classes.bottom_sidebar}>
            <Button
              className={classes.profile_btn}
              color={"black"}
              variant={"transparent"}
              leftSection={<IconMoodSmile />}
            >
              {sessionData.user?.name}
            </Button>
            <Tooltip label={"Выйти"}>
              <IconLogout2 cursor={"pointer"} onClick={onLogoutClick} />
            </Tooltip>
          </Container>
          <CreateModalSidebar
            open={opened}
            setOpen={() => toggle()}
          />
        </SidebarLayout>
      );
    }
  };

  return render();
};
