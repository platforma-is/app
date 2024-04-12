import React, { FC } from "react";
import Link from "next/link";
import { Flex, ScrollArea, Text } from "@mantine/core";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { getForms } from "@/features/form/queries";
import { useQuery } from "@tanstack/react-query";
import { IForm } from "@/shared/types";
import { useParams } from "next/navigation";

type SidebarMenuProps = {
  // forms?: IForm[];
};

export const SidebarMenu: FC<SidebarMenuProps> = () => {
  const formsQuery = useQuery<IForm[]>({
    queryKey: ["forms"],
    queryFn: getForms,
  });

  const params = useParams();
  const locationFormId = params?.id;

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
      <ScrollArea h={"%100"} w={"100%"}>
        <Flex w={"100%"} direction={"column"}>
          {formsQuery.data?.map((form, index) => {
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
