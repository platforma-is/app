import React, { FC, ReactNode } from "react";
import { Container } from "@mantine/core";
import classes from "@/shared/ui-kit/layouts/ApplicationLayout.module.scss";

type ApplicationLayoutProps = {
  title?: string | ReactNode;
  children?: ReactNode;
};

export const ApplicationLayout: FC<ApplicationLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Container size="100%">
      <div className={classes.page_title}>{title}</div>
      {children}
    </Container>
  );
};
