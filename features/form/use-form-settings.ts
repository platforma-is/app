"use client";

import {
  getGetFormsQueryKey,
  useDeleteForm,
  useGetSettings,
  useUpdateSettings,
} from "@/shared/api/gen/forms/forms.api";
import Router from "next/router";
import { useForm } from "@mantine/form";
import { Form, TSettings } from "@/shared/api/model";
import { useQueryClient } from "@tanstack/react-query";
import { handleNotification } from "@/shared/utils";
import { useEffect } from "react";

export const useFormSettings = (form: Form) => {
  const queryClient = useQueryClient();
  const deleteFormMutation = useDeleteForm();
  const updateSettings = useUpdateSettings();
  const { data: settingsData, isSuccess } = useGetSettings(form.id);
  const formController = useForm<Partial<TSettings>>({
    mode: "uncontrolled",
    initialValues: {
      ...settingsData,
    },
  });
  useEffect(() => {
    if (isSuccess) {
      formController.setValues({ ...settingsData });
    }
  }, [formController, isSuccess, settingsData]);

  const deleteAction = () => {
    deleteFormMutation.mutate(
      { formId: form.id },
      {
        onSuccess: async () => {
          await queryClient
            .invalidateQueries({ queryKey: [getGetFormsQueryKey()] })
            .then(() => {
              Router.push("/");
            });
        },
      },
    );
  };

  const onSubmit = (values: Partial<TSettings>) => {
    updateSettings.mutate(
      {
        formId: form.id,
        data: values,
      },
      {
        onSuccess: async () => {
          await queryClient
            .invalidateQueries({
              queryKey: getGetFormsQueryKey(),
            })
            .then(() =>
              handleNotification({
                message: "Настройки вашей формы успешно обновлены!",
              }),
            );
        },
        onError: () => {
          handleNotification({ mode: "error", message: "Произошла ошибка" });
        },
      },
    );
  };

  return {
    deleteAction,
    onSubmit,
    isDeleteLoading: deleteFormMutation.isPending,
    isSaveLoading: updateSettings.isPending,
    formController,
  };
};
