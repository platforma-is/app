import { Flex } from "@mantine/core";
import { SettingsTextField } from "@/components/form/settings/SettingsTextField";
import { SettingsSelect } from "@/components/form/settings/SettingsSelect";
import { SettingsSwitch } from "@/components/form/settings/SettingsSwitch";
export const SettingFirstBlock = () => {
  return (
    <Flex direction={"column"} rowGap={"1rem"}>
      <SettingsTextField
        title={"Название"}
        inputProps={{ placeholder: "например: Форма 123" }}
      />
      <SettingsSelect
        title={"Папка"}
        selectProps={{ placeholder: "Выберете папку", data: ["1", "2", "3"] }}
      />
      <SettingsSwitch
        title={"Приём ответов"}
        switchProps={{ color: "#5033FF" }}
      />
      <SettingsSwitch
        title={"Защита от спама"}
        switchProps={{ color: "#5033FF" }}
      />
    </Flex>
  );
};
