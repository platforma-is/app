import {
  useDeleteForm,
  useGetSettings,
  useUpdateSettings,
} from "@/shared/api/gen/forms/forms.api";
import Router from "next/router";
import { useForm } from "@mantine/form";
import { Form, TSettings } from "@/shared/api/model";
import { useQueryClient } from "@tanstack/react-query";

export const useFormSettings = (form: Form) => {
  const queryClient = useQueryClient();
  const deleteFormMutation = useDeleteForm();
  const updateSettings = useUpdateSettings();
  const getSettings = useGetSettings(form.id, { query: { staleTime: 0 } });
  const formController = useForm<Partial<TSettings>>({
    mode: "uncontrolled",
    initialValues: {
      ...getSettings.data,
    },
  });

  const deleteAction = () => {
    deleteFormMutation.mutate(
      { formId: form.id },
      {
        onSuccess: async () => {
          await queryClient
            .invalidateQueries({ queryKey: ["forms"] })
            .then(() => {
              Router.push("/");
            });
        },
      },
    );
  };

  const onSubmit = (values: TSettings) => {
    console.log(values);
    updateSettings.mutate({
      formId: form.id,
      data: values,
    });
  };

  return {
    deleteAction,
    onSubmit,
    isLoading: deleteFormMutation.isPending,
    formController,
  };
};
