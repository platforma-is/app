import { Flex, Text } from "@mantine/core";
import { SettingsTextField } from "@/components/form/settings/ui/SettingsTextField";
import { SettingsSwitch } from "@/components/form/settings/ui/SettingsSwitch";
import { SettingsMultipleSelect } from "@/components/form/settings/ui/SettingsMultipleSelect";
import { SettingsRadioFields } from "@/components/form/settings/ui/SettingsRadioFields";
import { ISettingsBlock } from "@/components/form/settings/types";

export const SettingSecondBlock = ({ formController }: ISettingsBlock) => {
  return (
    <Flex direction={"column"} rowGap={"1rem"}>
      <Text fw={600} lh={"1.25rem"}>
        Уведомления на электронную почту
      </Text>
      <SettingsSwitch
        title={"Получать письма"}
        switchProps={{ color: "#5033FF" }}
      />
      <SettingsMultipleSelect title={"Электронная почта"} />
      <SettingsRadioFields
        title={"Экран успеха"}
        labelProps={{ fw: 600 }}
        data={["Стандартный", "Собственный"]}
      />
      <SettingsTextField
        inputProps={{ disabled: true, placeholder: "https://yourdomain" }}
        title={"URL успеха"}
      />

      <SettingsTextField
        inputProps={{ disabled: true, placeholder: "https://yourdomain" }}
        title={"URL ошибки"}
      />
    </Flex>
  );
};
