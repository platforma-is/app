import { Button, Flex, Loader } from "@mantine/core";
import { SettingFirstBlock } from "@/components/form/settings/SettingFirstBlock";
import { SettingSecondBlock } from "@/components/form/settings/SettingsSecondBlock";
import { IconTrash } from "@tabler/icons-react";
import { deleteFormApi } from "@/features/form/queries";
import Router from "next/router";
import { IForm } from "@/shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FormSettingsBodyProps {
  form: IForm;
}

export const FormSettingsBody = ({ form }: FormSettingsBodyProps) => {
  const deleteFormMutation = useMutation({
    mutationFn: (id: string) => deleteFormApi(id),
  });
  const queryClient = useQueryClient();
  const deleteAction = () => {
    deleteFormMutation.mutate(form.id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["forms"] });
        await Router.push("/");
      },
    });
  };
  return (
    <Flex direction={"column"} rowGap={"2.5rem"}>
      <Button pos={"fixed"} bottom={"1.5rem"} right={"1.5rem"}>
        Сохранить
      </Button>
      <SettingFirstBlock />
      <SettingSecondBlock />
      <Button
        onClick={() => deleteAction()}
        leftSection={<IconTrash />}
        fw={400}
        px={"1rem"}
        w={"fit-content"}
        variant={"light"}
        color={"red"}
      >
        {deleteFormMutation.isPending ? (
          <Loader color={"red"} size={"1rem"} />
        ) : (
          "Удалить форму"
        )}
      </Button>
    </Flex>
  );
};
