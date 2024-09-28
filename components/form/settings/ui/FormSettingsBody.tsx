import { Button, Loader } from "@mantine/core";
import { SettingFirstBlock } from "@/components/form/settings/ui/SettingFirstBlock";
import { SettingSecondBlock } from "@/components/form/settings/ui/SettingsSecondBlock";
import { IconTrash } from "@tabler/icons-react";
import { Form } from "@/shared/api/model";
import { useFormSettings } from "@/features/form/use-form-settings";

interface FormSettingsBodyProps {
  form: Form;
}

export const FormSettingsBody = ({ form }: FormSettingsBodyProps) => {
  const { deleteAction, isLoading, onSubmit, formController } =
    useFormSettings(form);

  return (
    <form
      onSubmit={formController.onSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", rowGap: "2.5rem" }}
    >
      <Button type={"submit"} pos={"fixed"} bottom={"1.5rem"} right={"1.5rem"}>
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
        {isLoading ? <Loader color={"red"} size={"1rem"} /> : "Удалить форму"}
      </Button>
    </form>
  );
};
