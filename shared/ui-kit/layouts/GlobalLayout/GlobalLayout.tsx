import React, { ReactNode } from "react";
import { Container, ContainerProps } from "@mantine/core";
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
    <div className={classes.global}>
      {sidebar}
      <Container
        {...containerProps}
        w="100vw"
        p="20px"
        ml={"20rem"}
        mr={"0px"}
        className={clsx(classes.global_body, containerProps?.className)}
      >
        {children}
      </Container>
    </div>
  );
};
