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
        key={formController.key("title")}
        inputProps={{ placeholder: "например: Форма 123" }}
        {...formController.getInputProps("title")}
      />
      <SettingsSelect
        title={"Папка"}
        key={formController.key("folder")}
        selectProps={{ placeholder: "Выберете папку", data: ["1", "2", "3"] }}
        {...formController.getInputProps("folder")}
      />
      <SettingsSwitch
        key={formController.key("active")}
        title={"Приём ответов"}
        switchProps={{ color: "#5033FF" }}
        {...formController.getInputProps("active")}
      />
      <SettingsSwitch
        key={formController.key("spamProtected")}
        title={"Защита от спама"}
        switchProps={{ color: "#5033FF" }}
        {...formController.getInputProps("spamProtected")}
      />
    </Flex>
  );
};
