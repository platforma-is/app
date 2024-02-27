import React, { FC } from "react";
import { IForm } from "@/shared/types";
import { deleteFormApi } from "@/features/form/queries";
import Router from "next/router";
import { FormMenuLayout } from "@/components/form/FormMenuLayout";
import { FormActiveToggle } from "@/components/form/FormActiveToggle";

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
