import React, { FC } from "react";
import { IForm } from "@/shared/types";
import { deleteFormApi } from "@/features/form/queries";
import Router from "next/router";
import FormTitleLayout from "@/components/form/FormTitleLayout";

type FormTitleProps = {
  form: IForm;
  publicLink: string;
};

async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.push("/");
}

const FormTitle: FC<FormTitleProps> = ({ form, publicLink }) => {
  return (
    <FormTitleLayout
      form={form}
      publicLink={publicLink}
      onDeleteClick={() => deleteForm(form.id)}
    />
  );
};

export default FormTitle;
