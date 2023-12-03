import React, { ReactNode } from "react";
import { Container } from "@mantine/core";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Container size="xl">
        <Header />
        <Container pb="xl" pt="md">
          <Container size="md">Authenticating ...</Container>
        </Container>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container size="xl">
        <Header />
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
      <Header />
      <Container pb="xl" pt="md">
        <Container size="md">{props.children}</Container>
      </Container>
    </Container>
  );
};

export default Layout;
