import React, { FC, ReactNode } from "react";
import { Card } from "@mantine/core";
import Layout from "@/components/global/Layout";

type HomePageLayoutProps = {
  header?: ReactNode;
  body?: ReactNode;
};

export const HomePageLayout: FC<HomePageLayoutProps> = ({ header, body }) => {
  return (
    <Layout>
      <Card radius="md" p="xl">
        {header}
        {body}
      </Card>
    </Layout>
  );
};
