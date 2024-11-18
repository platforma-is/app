import { Box, Flex } from "@mantine/core";
import React from "react";
import Image from "next/image";

export const StatusLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      align={"center"}
      justify={"center"}
      pos={"absolute"}
      inset={0}
    >
      {children}
      <Box pos={"absolute"} bottom={24}>
        <Image
          width={128}
          height={44}
          src={"/assets/icons/logo.svg"}
          alt={"platforma"}
        />
      </Box>
    </Flex>
  );
};
