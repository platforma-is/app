import React, { FC, ReactNode } from "react";
import { Avatar, Container, Flex, rem } from "@mantine/core";
import classes from "./StageBlock.module.scss";

type StageBlockType = {
  stage: number;
  title: string;
  description?: string;
  content?: ReactNode;
};

export const StageBlock: FC<StageBlockType> = ({
  stage,
  title,
  description,
  content,
}) => {
  return (
    <Container style={{ borderRadius: rem(12) }} mb="md" w="100%" p="sm" className={classes.container}>
      <Flex
        mih={50}
        gap="12px"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="nowrap"
        mb="md"
      >
        <Avatar
          radius="xl"
          variant="filled"
          size={48}
          color={"var(--color-gray-1)"}
          styles={{
            placeholder: { color: "var(--color-black)", fontWeight: 400 },
          }}
          autoContrast={false}
        >
          {stage}
        </Avatar>
        <Flex
          mih={50}
          justify="center"
          align="flex-start"
          direction="column"
          wrap="nowrap"
          gap={4}
        >
          <div className={classes.title}>{title}</div>
          {description ? (
            <div className={classes.description}>{description}</div>
          ) : null}
        </Flex>
      </Flex>
      <div className={classes.content}>{content ? content : null}</div>
    </Container>
  );
};
