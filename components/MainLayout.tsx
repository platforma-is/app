import React, { ReactNode } from "react";
import { SessionContextValue } from "next-auth/react";
import { Container } from "@mantine/core";

type LayoutWrapperProps = {
  children: ReactNode;
  session: SessionContextValue;
  header: ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  session,
  header,
}) => {
  const { data: sessionData, status } = session;

  if (status === "loading") {
    return (
      <Container size="xl">
        {header}
        <Container pb="xl" pt="md">
          <Container size="md">Authenticating ...</Container>
        </Container>
      </Container>
    );
  }

  if (!sessionData) {
    return (
      <Container size="xl">
        {header}
        <Container pb="xl" pt="md">
          <Container size="md">
            You need to be logged in to view this page.
          </Container>
        </Container>
      </Container>
    );
  }

  return (
    <Container size="xl">
      {header}
      <Container pb="xl" pt="md">
        <Container size="md">{children}</Container>
      </Container>
    </Container>
  );
};

export default LayoutWrapper;
