import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Container } from "@mantine/core";
import { GlobalLayout } from "@/shared/ui-kit/layouts/GlobalLayout";
import { Sidebar } from "@/components/global/Sidebar";

type GlobalWrapperProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  sidebar = <Sidebar />,
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

  return (
    <GlobalLayout
      containerProps={{ pl: sessionData ? "20rem" : "0" }}
      sidebar={sidebar}
    >
      {render()}
    </GlobalLayout>
  );
};
