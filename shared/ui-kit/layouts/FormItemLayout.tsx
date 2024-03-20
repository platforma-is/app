import { Card } from "@mantine/core";
import { ReactNode } from "react";

interface FormItemLayoutProps {
  title: ReactNode;
  tabs: ReactNode;
}
export const FormItemLayout = ({ title, tabs }: FormItemLayoutProps) => {
  return (
    <Card w={"100%"} radius="md" p="xl" mb="md">
      {title}
      {tabs}
    </Card>
  );
};
