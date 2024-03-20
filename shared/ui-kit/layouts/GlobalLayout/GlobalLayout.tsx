import React, { ReactNode } from "react";
import { Container, ContainerProps, Flex } from "@mantine/core";
import clsx from "clsx";
import classes from "./GlobalLayout.module.scss";

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
    <Flex className={classes.global} display={"flex"}>
      {sidebar}
      <Container
        {...containerProps}
        className={clsx(classes.global_body, containerProps?.className)}
      >
        {children}
      </Container>
    </Flex>
  );
};
