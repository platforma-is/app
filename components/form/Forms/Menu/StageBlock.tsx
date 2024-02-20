import { Avatar, Container, Flex, rem } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import classes from "./StageBlock.module.css";

type StageBlockType = {
  stage: number;
  title: string;
  description?: string;
  content?: ReactNode;
};

const StageBlock: FC<StageBlockType> = ({
  stage,
  title,
  description,
  content,
}) => {
  return (
    <Container
      bg="var(--color-gray-0)"
      style={{ borderRadius: rem(12) }}
      mb="md"
      w="100%"
      p="sm"
    >
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="nowrap"
        mb="md"
      >
        <Avatar color="gray" radius="xl">
          {stage}
        </Avatar>
        <Flex
          mih={50}
          justify="center"
          align="flex-start"
          direction="column"
          wrap="nowrap"
        >
          <div className={classes.title}>{title}</div>
          {description ? (
            <div className={classes.description}>{description}</div>
          ) : null}
        </Flex>
      </Flex>
      {content ? content : null}
    </Container>
  );
};

export default StageBlock;
