import classes from "@/components/form/Forms.module.css";
import Router from "next/router";
import React, { FC } from "react";
import { IForm } from "@/shared/types";
import { Text } from "@mantine/core";

type SidebarMenuItemProps = {
  form: IForm;
};

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({ form }) => {
  return (
    <div
      className={classes.link}
      onClick={() => Router.push("/form/[id]", `/form/${form.id}`)}
    >
      <Text>{form.title}</Text>
    </div>
  );
};
