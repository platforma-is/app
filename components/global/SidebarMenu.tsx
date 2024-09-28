import React, { FC } from "react";
import Link from "next/link";
import { Flex, ScrollArea, Text } from "@mantine/core";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useParams } from "next/navigation";
import { useGetForms } from "@/shared/api/gen/forms/forms.api";

type SidebarMenuProps = {
  // forms?: IForm[];
};

export const SidebarMenu: FC<SidebarMenuProps> = () => {
  const { data: forms, isLoading } = useGetForms();

  const params = useParams();
  const locationFormId = params?.id;

  if (isLoading) {
    return (
      <Text fz="lg" fw={500}>
        Загрузка...
      </Text>
    );
  }
  if (forms?.length === 0) {
    return (
      <Text fz="lg" fw={500}>
        Еще нет форм <Link href="/pages/create">Создать</Link>
      </Text>
    );
  } else {
    return (
      <ScrollArea h={"%100"} w={"100%"}>
        <Flex w={"100%"} direction={"column"}>
          {forms?.map((form, index) => {
            const isActive = locationFormId ? form.id === params.id : false;
            return (
              <SidebarMenuItem
                key={form.id}
                form={form}
                notificationsNumber={index}
                isActive={isActive}
              />
            );
          })}
        </Flex>
      </ScrollArea>
    );
  }
};
