import { Container } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./SigninLayout.module.scss";

type SigninLayoutProps = {
  children?: ReactNode;
};

export const SigninLayout = ({ children }: SigninLayoutProps) => {
  return <Container className={classes.signin_content}>
    {children}
  </Container>;
};
