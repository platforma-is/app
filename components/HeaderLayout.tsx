import React from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { SessionContextValue, SessionProviderProps, signOut, useSession,  } from "next-auth/react";
import { IconFilePlus } from "@tabler/icons-react";
import Image from "next/image";
import {
  Group,
  Container,
  Avatar,
  Button,
  ActionIcon,
  Menu,
} from "@mantine/core";
import classes from "@/components/HeaderMenu.module.css";
import logo from "@/public/assets/icons/logo.svg";


type HeaderProps = {
  router: Router,
  session: SessionContextValue
}

const HeaderLayout: React.FC<HeaderProps> = ({router, session}) => {
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const { data: sessionData, status } = session;

  if (status === "loading") {
    return <p>Validating session ...</p>;
  }

  if (!session) {
    return (
      <Link href="/api/auth/signin" legacyBehavior>
        <a className={classes.link} data-active={isActive("/signup")}>
          Log in
        </a>
      </Link>
    );
  }

  if (session) {
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

        {session.user?.image && (
          <Menu
            transitionProps={{ transition: "pop" }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <Avatar src={sessionData.user?.image} alt="it's me" size="sm" />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => signOut()}>Log out</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Group>
    );
  }
};

export default function HeaderMenuLayout () {
  return (
    <header className={classes.header}>
      <Container size="xl" px="md" py="sm">
        <div className={classes.inner}>
          <Link href="/" legacyBehavior>
            <Image src={logo} alt="platforma.is" className={classes.logo} />
          </Link>
          <HeaderLayout />
        </div>
      </Container>
    </header>
  );
}
