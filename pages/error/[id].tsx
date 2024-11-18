import React from "react";
import { GetServerSideProps } from "next";
import { Flex, Text } from "@mantine/core";
import { StatusLayout } from "@/shared/ui-kit/layouts/StatusLayout";
import { IconError404 } from "@tabler/icons-react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { id: params?.id },
  };
};

const Error = () => {
  return (
    <StatusLayout>
      <Flex align={"center"} direction={"column"}>
        <IconError404 width={64} height={64} />
        <Text
          sx={{
            fontFamily: "Circe Rounded Medium, sans-serif",
            textAlign: "center",
          }}
          size={"xl"}
          fz={"h1"}
          fs={"2.75rem"}
          fw={500}
          lh={"2.5rem"}
          lts={"-0.055rem"}
        >
          Что-то пошло не так :(
        </Text>
      </Flex>
    </StatusLayout>
  );
};

export default Error;
