import React from "react";
import { StatusLayout } from "@/shared/ui-kit/layouts/StatusLayout";
import { GetServerSideProps } from "next";
import { Flex, Text } from "@mantine/core";
import CheckIco from "@/public/assets/icons/Check.svg";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: { id: params?.id },
  };
};

const Success = () => {
  return (
    <StatusLayout>
      <Flex align={"center"} direction={"column"}>
        <Image priority width={64} height={64} src={CheckIco} alt={""} />
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
          Ответ отправлен.
          <br /> Спасибо!
        </Text>
      </Flex>
    </StatusLayout>
  );
};

export default Success;
