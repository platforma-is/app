import { Button, Flex, Portal } from "@mantine/core";
import { SettingFirstBlock } from "@/components/form/settings/SettingFirstBlock";
import { SettingSecondBlock } from "@/components/form/settings/SettingsSecondBlock";
import { IconTrash } from "@tabler/icons-react";
import { deleteFormApi } from "@/features/form/queries";
import Router from "next/router";
import { IForm } from "@/shared/types";

interface FormSettingsBodyProps {
  form: IForm;
}

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.push("/");
}

export const FormSettingsBody = ({ form }: FormSettingsBodyProps) => {
  return (
    <Flex direction={"column"} rowGap={"2.5rem"}>
      <Button pos={"fixed"} bottom={"1.5rem"} right={"1.5rem"}>
        Сохранить
      </Button>
      <SettingFirstBlock />
      <SettingSecondBlock />
      <Button
        onClick={() => deleteForm(form.id)}
        leftSection={<IconTrash />}
        fw={400}
        px={"1rem"}
        w={"fit-content"}
        variant={"light"}
        color={"red"}
      >
        Удалить форму
      </Button>
    </Flex>
  );
};
