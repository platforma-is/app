import { Button, Loader, LoadingOverlay } from "@mantine/core";
import { SettingFirstBlock } from "@/components/form/settings/ui/SettingFirstBlock";
import { SettingSecondBlock } from "@/components/form/settings/ui/SettingsSecondBlock";
import { IconTrash } from "@tabler/icons-react";
import { Form } from "@/shared/api/model";
import { useFormSettings } from "@/features/form/use-form-settings";

interface FormSettingsBodyProps {
  form: Form;
}

export const FormSettingsBody = ({ form }: FormSettingsBodyProps) => {
  const {
    deleteAction,
    isDeleteLoading,
    isSaveLoading,
    onSubmit,
    formController,
    visible,
  } = useFormSettings(form);

  return (
    <form
      onSubmit={formController.onSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", rowGap: "2.5rem" }}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Button
        disabled={!formController.isDirty()}
        loading={isSaveLoading}
        type={"submit"}
        pos={"fixed"}
        sx={{zIndex: 100}}
        bottom={"1.5rem"}
        right={"1.5rem"}
      >
        Сохранить
      </Button>
      <SettingFirstBlock formController={formController} />
      <SettingSecondBlock formController={formController} />
      <Button
        onClick={() => deleteAction()}
        leftSection={<IconTrash />}
        fw={400}
        px={"1rem"}
        w={"fit-content"}
        variant={"light"}
        color={"red"}
      >
        {isDeleteLoading ? (
          <Loader color={"red"} size={"1rem"} />
        ) : (
          "Удалить форму"
        )}
      </Button>
    </form>
  );
};
