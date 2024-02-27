import React from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { HeaderLayout } from "@/shared/ui-kit/layouts/HeaderLayout";
import { IconFilePlus } from "@tabler/icons-react";
import classes from "@/components/global/Header.module.css";
import { Group, Avatar, Button, ActionIcon, Menu } from "@mantine/core";
import Link from "next/link";

export const Header: React.FC = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const onLogoutClick = () => {
    signOut();
  };

  const render = () => {
    if (status === "loading") {
      return <p>Validating session ...</p>;
    }

    if (!sessionData) {
      return (
        <Link href="/api/auth/signin" legacyBehavior>
          <a className={classes.link} data-active={isActive("/signup")}>
            Log in
          </a>
        </Link>
      );
    }

    if (sessionData) {
      return (
        <Group>
          <Button
            component="a"
            href="/create"
            size="xs"
            leftSection={<IconFilePlus size="16" />}
          >
            Создать форму
          </Button>

          {sessionData.user?.image && (
            <Menu
              transitionProps={{ transition: "pop" }}
              withArrow
              position="bottom-end"
              withinPortal
            >
              <Menu.Target>
                <ActionIcon variant="subtle" color="gray">
                  <Avatar
                    src={sessionData.user?.image}
                    alt="it's me"
                    size="sm"
                  />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => onLogoutClick()}>Log out</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </Group>
      );
    }
  };

  return <HeaderLayout>{render()}</HeaderLayout>;
};
