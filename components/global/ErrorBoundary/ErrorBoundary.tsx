import React from "react";
import { Button, Flex } from "@mantine/core";
import Image from "next/image";
import classes from "./styles.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if ((this.state as any).hasError) {
      // You can render any custom fallback UI
      return (
        <Flex
          className={classes.wrapper}
          pos={"absolute"}
          inset={0}
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
          <Image
            className={classes.logo}
            width={150}
            height={150}
            src={"/assets/icons/platforma.svg"}
            alt={"logo"}
          />
          <h2>Произошла неизвестная ошибка :(</h2>
          <Button mt={20} onClick={() => this.setState({ hasError: false })}>
            Попробовать заново?
          </Button>
        </Flex>
      );
    }

    // Return children components in case of no error

    return (this.props as any).children;
  }
}

export default ErrorBoundary;
