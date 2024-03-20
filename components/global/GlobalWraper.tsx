import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { Container, Loader } from "@mantine/core";
import { GlobalLayout } from "@/shared/ui-kit/layouts/GlobalLayout";
import { Sidebar } from "@/components/global/Sidebar";
import { router } from "next/client";
import { useRouter } from "next/router";

type GlobalWrapperProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export const GlobalWrapper: React.FC<GlobalWrapperProps> = ({
  children,
  sidebar = <Sidebar />,
}) => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  const render = () => {
    if (status === "loading") {
      return (
        <Container size="md">
          <Loader pos={"absolute"} top={"50%"} left={"50%"} />
        </Container>
      );
    } else {
      if (!sessionData) {
        router.push("/auth/signin");
      }
      if (sessionData) {
        return <Container>{children}</Container>;
      }
    }
  };

  return (
    <GlobalLayout
      containerProps={{ w: "100%", pl: sessionData ? "20rem" : "0" }}
      sidebar={sidebar}
    >
      {render()}
    </GlobalLayout>
  );
};
