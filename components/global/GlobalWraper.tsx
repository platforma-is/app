import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Container } from "@mantine/core";
import { GlobalLayout } from "@/shared/ui-kit/layouts/GlobalLayout";
import { Header } from "@/components/global/Header";

type GlobalWrapperProps = {
  children: ReactNode;
  header?: ReactNode;
};

export const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  header = <Header />,
}) => {
  const { data: sessionData, status } = useSession();

  const render = () => {
    if (status === "loading") {
      return <Container size="md">Authenticating ...</Container>;
    }

    if (!sessionData) {
      return (
        <Container size="md">
          You need to be logged in to view this page.
        </Container>
      );
    }

    return <Container size="md">{children}</Container>;
  };

  return <GlobalLayout header={header}>{render()}</GlobalLayout>;
};
