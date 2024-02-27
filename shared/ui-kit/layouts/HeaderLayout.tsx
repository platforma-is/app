import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/HeaderLayout.module.css";
import logo from "@/public/assets/icons/logo.svg";

type HeaderProps = {
  children: React.ReactNode;
};

export function HeaderLayout({ children }: HeaderProps) {
  return (
    <header className={classes.header}>
      <Container size="xl" px="md" py="sm">
        <div className={classes.inner}>
          <Link href="/" legacyBehavior>
            <Image src={logo} alt="platforma.is" className={classes.logo} />
          </Link>
          {children}
        </div>
      </Container>
    </header>
  );
}
