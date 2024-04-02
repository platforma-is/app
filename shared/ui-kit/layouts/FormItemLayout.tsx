import { Card } from "@mantine/core";
import { ReactNode } from "react";
import { ApplicationLayout } from "./ApplicationLayout";

interface FormItemLayoutProps {
  title?: ReactNode;
  tabs?: ReactNode;
}
export const FormItemLayout = ({ title, tabs }: FormItemLayoutProps) => {
  return (
    <ApplicationLayout title={title}>
      <Card radius="md" p="0px" mb="0px">
        {tabs}
      </Card>
    </ApplicationLayout>
  );
};
