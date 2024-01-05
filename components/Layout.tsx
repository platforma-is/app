import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Container } from "@mantine/core";
import Header from "@/components/Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Container pb="xl" pt="md">
        <Header />
        <Container size="md">Authenticating ...</Container>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container pb="xl" pt="md">
        <Header />
        <Container size="md">
          You need to be logged in to view this page.
        </Container>
      </Container>
    );
  }

  return (
    <Container pb="xl" pt="md">
      <Header />
      <Container size="md">{props.children}</Container>
    </Container>
  );
};

export default Layout;
