import React, { FC } from "react";
import Link from "next/link";
import { Flex, Text } from "@mantine/core";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { getForms } from "@/features/form/queries";
import { useQuery } from "@tanstack/react-query";
import { IForm } from "@/shared/types";

type SidebarMenuProps = {
  // forms?: IForm[];
};

export const SidebarMenu: FC<SidebarMenuProps> = () => {
  const formsQuery = useQuery<IForm[]>({
    queryKey: ["forms"],
    queryFn: getForms,
  });

  if (formsQuery.isLoading) {
    return (
      <Text fz="lg" fw={500}>
        Загрузка...
      </Text>
    );
  }
  if (formsQuery.data?.length === 0) {
    return (
      <Text fz="lg" fw={500}>
        Еще нет форм <Link href="/pages/create">Создать</Link>
      </Text>
    );
  } else {
    return (
      <Flex w={"100%"} direction={"column"} style={{ overflowY: "scroll" }}>
        {formsQuery.data?.map((form, index) => (
          <SidebarMenuItem
            key={form.id}
            form={form}
            notificationsNumber={index}
            isActive={index === 0}
          />
        ))}
      </Flex>
    );
  }
};
