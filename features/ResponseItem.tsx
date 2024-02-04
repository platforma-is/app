import React, { FC } from "react";
import Router from "next/router";
import { deleteResponseApi } from "@/data/response";
import { ResponseItemLayout } from "@/components/ResponseItemLayout";
import { IResponse } from "types";

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
