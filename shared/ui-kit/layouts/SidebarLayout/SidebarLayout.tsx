import React from "react";
import { Card } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/SidebarLayout/SidebarLayout.module.scss";

type SidebarProps = {
  children?: React.ReactNode;
};

export function SidebarLayout({ children }: SidebarProps) {
  return (
    <Card className={classes.sidebar} withBorder>
      {children}
    </Card>
  );
}
