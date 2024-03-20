import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { SidebarLayout } from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout";
import { Button, Container } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout.module.scss";
import { IconMoodSmile } from "@tabler/icons-react";

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const onLogoutClick = () => {
    signOut();
  };

  const render = () => {
    if (status === "loading") {
      return <></>;
      // return createPortal(<Loader />, document.body);
    }

    if (!sessionData) {
      return <></>;
    }

    if (sessionData) {
      return (
        <SidebarLayout>
          <Container className={classes.sidebar_content}>
            <h3 className={classes.logo_title}>Формы</h3>
            <Button
              onClick={() => router.push("/create")}
              className={classes.create_form_btn}
              leftSection={<img src={"/assets/icons/Plus.svg"} alt={"plus"} />}
              variant={"transparent"}
            >
              Создать...
            </Button>
          </Container>
          <Container className={classes.bottom_sidebar}>
            <Button
              onClick={onLogoutClick}
              className={classes.profile_btn}
              color={"black"}
              variant={"transparent"}
              leftSection={<IconMoodSmile />}
            >
              {sessionData.user?.name} (exit)
            </Button>
          </Container>
        </SidebarLayout>
      );
    }
  };

  return render();
};
