import { Button, Flex, Portal } from "@mantine/core";
import { SettingFirstBlock } from "@/components/form/settings/SettingFirstBlock";
import { SettingSecondBlock } from "@/components/form/settings/SettingsSecondBlock";
import { IconTrash } from "@tabler/icons-react";

interface FormSettingsBodyProps {}

export const FormSettingsBody = (props: FormSettingsBodyProps) => {
  return (
    <Flex direction={"column"} rowGap={"2.5rem"}>
      <Portal target={document.body}>
        <Button pos={"fixed"} bottom={"1.5rem"} right={"1.5rem"}>
          Сохранить
        </Button>
      </Portal>
      <SettingFirstBlock />
      <SettingSecondBlock />
      <Button
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
