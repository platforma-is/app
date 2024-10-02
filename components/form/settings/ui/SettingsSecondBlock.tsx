import { Flex, Text } from "@mantine/core";
import { SettingsTextField } from "@/components/form/settings/ui/SettingsTextField";
import { SettingsSwitch } from "@/components/form/settings/ui/SettingsSwitch";
import { SettingsMultipleSelect } from "@/components/form/settings/ui/SettingsMultipleSelect";
import { SettingsRadioFields } from "@/components/form/settings/ui/SettingsRadioFields";
import { ISettingsBlock } from "@/components/form/settings/types";
import { SucessScreen } from "@/shared/api/model";

export const SettingSecondBlock = ({ formController }: ISettingsBlock) => {
  return (
    <Flex direction={"column"} rowGap={"1rem"}>
      <Text fw={600} lh={"1.25rem"}>
        Уведомления на электронную почту
      </Text>
      <SettingsSwitch
        title={"Получать письма"}
        switchProps={{
          color: "#5033FF",
          key: formController.key("emailNotification"),
          ...formController.getInputProps("emailNotification", {type: 'checkbox'}),
        }}
      />
      <SettingsMultipleSelect
        addCallback={(selected) =>
          formController.setFieldValue("emailNotificationMails", selected)
        }
        removeCallback={(selected) =>
          formController.setFieldValue("emailNotificationMails", selected)
        }
        title={"Электронная почта"}
        selected={formController.getValues().emailNotificationMails}
        inputProps={{
          key: formController.key("emailNotificationMails"),
          ...formController.getInputProps("emailNotificationMails"),
        }}
      />
      <SettingsRadioFields
        title={"Экран успеха"}
        labelProps={{ key: formController.key("successScreen"), fw: 600 }}
        data={[
          { label: "Стандартный", value: SucessScreen.STANDART },
          { label: "Собственный", value: SucessScreen.CUSTOM },
        ]}
        active={formController.values?.successScreen || ''}
        radioProps={{
          ...formController.getInputProps("successScreen"),
          onChange: (e) => {
            formController.setFieldValue(
              "successScreen",
              e.target.value as SucessScreen,
            );
          },
        }}
      />
      <SettingsTextField
        inputProps={{
          disabled: formController.getValues().successScreen !== "CUSTOM",
          placeholder: "https://yourdomain",
          key: formController.key("customUrlSuccess"),
          ...formController.getInputProps("customUrlSuccess"),
        }}
        title={"URL успеха"}
      />

      <SettingsTextField
        inputProps={{
          disabled: formController.getValues().successScreen !== "CUSTOM",
          placeholder: "https://yourdomain",
          key: formController.key("customUrlError"),
          ...formController.getInputProps("customUrlError"),
        }}
        title={"URL ошибки"}
      />
    </Flex>
  );
};
