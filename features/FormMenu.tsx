import React, { FC } from "react";
import { IForm } from "types";
import { deleteFormApi } from "@/data/form";
import Router from "next/router";
import { FormMenuLayout } from "@/components/FormMenuLayout";
import { FormActiveToggle } from "@/features/FormActiveToggle";

type FormMenuProps = {
  form: IForm;
  publicLink: string;
};

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.push("/");
}

export const FormMenu: FC<FormMenuProps> = ({ form, publicLink }) => {
  const onDeleteItem = (formId) => {
    deleteForm(formId);
  };

  return (
    <FormMenuLayout
      publicLink={publicLink}
      form={form}
      onDeleteItem={onDeleteItem}
    >
      <FormActiveToggle formId={form.id} active={form.active} />
    </FormMenuLayout>
  );
};
