import React, { ReactNode } from "react";
import { Container } from "@mantine/core";

type GlobalLayoutProps = {
  children?: ReactNode;
  header?: ReactNode;
};

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({
  children,
  header,
}) => {
  return (
    <Container size="xl">
      {header}
      <Container pb="xl" pt="md">
        {children}
      </Container>
    </Container>
  );
};
