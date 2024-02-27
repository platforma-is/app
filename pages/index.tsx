import React from "react";
import { Text } from "@mantine/core";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { IForm } from "@/shared/types";
import { HomePageLayout } from "@/shared/ui-kit/layouts/HomePageLayout";
import { HomePageBodyAdapter } from "@/components/home/HomePageBodyAdapter";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Header } from "@/components/global/Header";

export const getServerSideProps: GetServerSideProps = async () => {
  const forms = await prisma.form.findMany({
    include: {
      responses: true,
    },
  });

  return {
    props: { forms },
  };
};

type Props = {
  forms: IForm[];
};

const Index: React.FC<Props> = ({ forms }) => {
  return (
    <GlobalWrapper header={<Header />}>
      <HomePageLayout
        title={
          <Text fz="lg" fw={900} mb="xl">
            Forms
          </Text>
        }
        body={<HomePageBodyAdapter forms={forms} />}
      />
    </GlobalWrapper>
  );
};

export default Index;
