import classes from "@/components/form/Forms.module.scss";
import Router from "next/router";
import React, { FC } from "react";
import clsx from "clsx";
import { Form } from "@/shared/api/model";

type SidebarMenuItemProps = {
  form: Form;
  isActive?: boolean;
  notificationsNumber?: number;
};

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  form,
  isActive,
}) => {
  return (
    <div
      className={isActive ? clsx(classes.link, classes.active) : classes.link}
      onClick={() => Router.replace("/form/[id]", `/form/${form.id}`)}
    >
      <div className={classes.title}>{form.title}</div>
      {/*{!!notificationsNumber && (*/}
      {/*  <Badge color="rgba(80, 51, 255, 1)" circle>*/}
      {/*    {notificationsNumber}*/}
      {/*  </Badge>*/}
      {/*)}*/}
    </div>
  );
};
