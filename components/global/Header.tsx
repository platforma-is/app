import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
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
import classes from "@/components/global/HeaderMenu.module.css";
import logo from "@/public/assets/icons/logo.svg";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;
  const { data: session, status } = useSession();

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
          // onClick={(event) => event.preventDefault()}
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
                <Avatar src={session.user?.image} alt="it's me" size="sm" />
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

export default function HeaderMenu() {
  return (
    <header className={classes.header}>
      <Container size="xl" px="md" py="sm">
        <div className={classes.inner}>
          <Link href="/" legacyBehavior>
            <Image src={logo} alt="platforma.is" className={classes.logo} />
          </Link>
          <Header />
        </div>
      </Container>
    </header>
  );
}
