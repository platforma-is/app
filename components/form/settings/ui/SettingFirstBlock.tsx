import { Flex } from "@mantine/core";
import { SettingsTextField } from "@/components/form/settings/ui/SettingsTextField";
import { SettingsSelect } from "@/components/form/settings/ui/SettingsSelect";
import { SettingsSwitch } from "@/components/form/settings/ui/SettingsSwitch";
import { ISettingsBlock } from "@/components/form/settings/types";

export const SettingFirstBlock = ({ formController }: ISettingsBlock) => {
  return (
    <Flex direction={"column"} rowGap={"1rem"}>
      <SettingsTextField
        title={"Название"}
        inputProps={{
          placeholder: "например: Форма 123",
          key: formController.key("title"),
          ...formController.getInputProps("title"),
        }}
      />
      <SettingsSelect
        title={"Папка"}
        selectProps={{
          placeholder: "Выберете папку",
          data: ["1", "2", "3"],
          key: formController.key("folder"),
          ...formController.getInputProps("folder"),
        }}
      />
      <SettingsSwitch
        title={"Приём ответов"}
        switchProps={{
          color: "#5033FF",
          key: formController.key("active"),
          ...formController.getInputProps("active"),
        }}
      />
      <SettingsSwitch
        title={"Защита от спама"}
        switchProps={{
          color: "#5033FF",
          key: formController.key("spamProtected"),
          ...formController.getInputProps("spamProtected"),
        }}
      />
    </Flex>
  );
};
