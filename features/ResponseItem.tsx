import { ActionIcon, Menu, rem, Table, Text } from "@mantine/core";
import { IconDots, IconTrash } from "@tabler/icons-react";
import React, { FC } from "react";
import { deleteResponseApi } from "@/data/response";
import Router from "next/router";
import { IResponse } from "types";
import { ResponseItemLayout } from "@/components/ResponseItemLayout";

type ResponseItemProps = {
  response: IResponse;
};

async function deleteResponse(id: string): Promise<void> {
  await deleteResponseApi(id);
  await Router.reload();
}

export const ResponseItem: FC<ResponseItemProps> = ({ response }) => {
  const onDeleteItem = (id: string) => {
    deleteResponse(id);
  };

  return <ResponseItemLayout response={response} onDeleteItem={onDeleteItem} />;
};
