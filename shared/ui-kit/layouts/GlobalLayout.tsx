import React, { ReactNode } from "react";
import { Container, ContainerProps, Flex } from "@mantine/core";
import clsx from "clsx";

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
    <Flex className={"global"} display={"flex"}>
      {sidebar}
      <Container
        {...containerProps}
        className={clsx("global_body", containerProps?.className)}
      >
        {children}
      </Container>
    </Flex>
  );
};
