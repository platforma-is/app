import React, { FC, ReactNode } from "react";
import { Card } from "@mantine/core";

type HomePageLayoutProps = {
  title?: ReactNode;
  body?: ReactNode;
};

export const HomePageLayout: FC<HomePageLayoutProps> = ({ title, body }) => {
  return (
    <Card radius="md" p="xl">
      {title}
      {body}
    </Card>
  );
};
