"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { Flex, ScrollArea, Text } from "@mantine/core";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useParams } from "next/navigation";
import { useGetForms } from "@/shared/api/gen/forms/forms.api";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

type SidebarMenuProps = {
  // forms?: IForm[];
};

export const SidebarMenu: FC<SidebarMenuProps> = () => {
  const { data: forms, isLoading } = useGetForms();
  const { height: pageHeight } = useWindowSize();

  const params = useParams();
  const locationFormId = params?.id;
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref?.current) {
      setHeight(ref?.current.getBoundingClientRect().height - 61);
    }
  }, [ref?.current, pageHeight]);
  const render = () => {
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
          Еще нет форм :(
        </Text>
      );
    } else {
      return (
        <ScrollArea style={{ height }} w={"100%"}>
          <Flex w={"100%"} direction={"column"}>
            {forms?.map((form, index) => {
              const isActive = locationFormId ? form.id === params.id : false;
              return (
                <SidebarMenuItem
                  key={`${form.id}${index}`}
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
  return (
    <Flex ref={ref} w={"100%"} h={"100%"}>
      {render()}
    </Flex>
  );
};
