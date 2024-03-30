import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { SidebarLayout } from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout";
import { Button, Container, Flex, Paper, Text } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout.module.scss";
import { IconMoodSmile } from "@tabler/icons-react";
import { ModalLayout } from "@/shared/ui-kit/layouts/ModalLayout";
import { CreateModalSidebar } from "@/components/global/CreateModalSidebar";

interface SibebarProps {
  menuContent?: ReactNode;
}

export const Sidebar: React.FC<SibebarProps> = ({ menuContent }) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();
  const [openedCreateModal, setOpenedCreateModal] = useState(false);
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
              onClick={() => setOpenedCreateModal(true)}
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
              onClick={onLogoutClick}
              className={classes.profile_btn}
              color={"black"}
              variant={"transparent"}
              leftSection={<IconMoodSmile />}
            >
              {sessionData.user?.name} (exit)
            </Button>
          </Container>
          <CreateModalSidebar
            open={openedCreateModal}
            setOpen={setOpenedCreateModal}
          />
        </SidebarLayout>
      );
    }
  };

  return render();
};
