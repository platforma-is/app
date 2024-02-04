import React from "react";
import { Text } from "@mantine/core";
import { IForm } from "src/shared/types";
import { HomePageLayout } from "@/src/shared/ui-kit/layouts/HomePageLayout";
import { HomePageBodyAdapter } from "@/src/entities/home/ui/HomePageBodyAdapter";

type Props = {
  forms: IForm[];
};

const Index: React.FC<Props> = ({ forms }) => {
  return (
    <HomePageLayout
      header={
        <Text fz="lg" fw={900} mb="xl">
          Forms
        </Text>
      }
      body={<HomePageBodyAdapter forms={forms} />}
    />
  );
};

export default Index;
