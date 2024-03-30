import React, { FC } from "react";
import Link from "next/link";
import { Flex, Text } from "@mantine/core";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IForm } from "@/shared/types";

type SidebarMenuProps = {
  forms: IForm[];
};

export const SidebarMenu: FC<SidebarMenuProps> = ({ forms }) => {
  const items = forms.map((form, index) => {
    return (
      <SidebarMenuItem
        key={form.id}
        form={form}
        notificationsNumber={index}
        isActive={index === 0}
      />
    );
  });

  if (items.length === 0) {
    return (
      <Text fz="lg" fw={500}>
        Еще нет форм <Link href="/pages/create">Создать</Link>
      </Text>
    );
  } else {
    return (
      <Flex w={"100%"} direction={"column"} style={{ overflowY: "scroll" }}>
        {items}
      </Flex>
    );
  }
};
