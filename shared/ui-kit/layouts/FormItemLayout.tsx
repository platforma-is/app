import { Card } from "@mantine/core";
import { ReactNode } from "react";

interface FormItemLayoutProps {
  title: ReactNode;
  tabs: ReactNode;
}
export const FormItemLayout = ({ title, tabs }: FormItemLayoutProps) => {
  return (
    <Card radius="md" p="xl" mb="md">
      {title}
      {tabs}
    </Card>
  );
};
