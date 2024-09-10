import { Card } from "@mantine/core";
import { ReactNode } from "react";

interface FormSettingsLayoutProps {
  body?: ReactNode;
}

export const FormSettingsLayout = ({ body }: FormSettingsLayoutProps) => {
  return (
    <Card radius="md" px="1.5rem" py="2.5rem">
      {body}
    </Card>
  );
};
