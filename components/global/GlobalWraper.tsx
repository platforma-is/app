import React, { ReactNode, Suspense } from "react";
import { useSession } from "next-auth/react";
import { Container, Loader } from "@mantine/core";
import { GlobalLayout } from "@/shared/ui-kit/layouts/GlobalLayout/GlobalLayout";
import { Sidebar } from "@/components/global/Sidebar";
import { useRouter } from "next/router";
import classes from "@/shared/ui-kit/layouts/GlobalLayout/GlobalLayout.module.scss";

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
    if (!sessionData && status === "loading") {
      return (
        <Container size="md" className={classes.inner}>
          <Loader pos={"absolute"} top={"50%"} left={"50%"} />
        </Container>
      );
    } else {
      if (!sessionData) {
        router.replace("/auth/signin");
      }
      if (sessionData) {
        return (
          <Container p={0} className={classes.inner}>
            <Suspense
              fallback={<Loader pos={"absolute"} top={"50%"} left={"50%"} />}
            >
              {children}
            </Suspense>
          </Container>
        );
      }
    }
  };

  return <GlobalLayout sidebar={sidebar}>{render()}</GlobalLayout>;
};
