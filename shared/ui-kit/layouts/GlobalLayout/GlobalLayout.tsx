import React, { ReactNode } from "react";
import { Container, ContainerProps } from "@mantine/core";
import clsx from "clsx";
import classes from "./GlobalLayout.module.scss";
import Head from "next/head";

type GlobalLayoutProps = {
  children?: ReactNode;
  sidebar?: ReactNode;
  containerProps?: ContainerProps;
};

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  sidebar,
  containerProps,
}) => {
  return (
    <div className={classes.global}>
      <Head>
        <link rel="icon" href="/assets/icons/platforma.svg" />
      </Head>
      {sidebar}
      <Container
        {...containerProps}
        w="100vw"
        maw={"calc(100vw - calc(20rem * var(--mantine-scale))"}
        p="24px"
        ml={"20rem"}
        mr={"0px"}
        className={clsx(classes.global_body, containerProps?.className)}
      >
        {children}
      </Container>
    </div>
  );
};
