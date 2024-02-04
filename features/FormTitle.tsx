import React, { FC } from "react";
import { IForm } from "types";
import { deleteFormApi } from "@/data/form";
import Router from "next/router";
import FormTitleLayout from "@/components/FormTitleLayout";

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
