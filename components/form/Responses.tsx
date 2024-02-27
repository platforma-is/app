import React, { FC } from "react";
import { IResponse } from "@/shared/types";
import { ResponsesLayout } from "@/components/form/ResponsesLayout";
import { ResponseItem } from "@/components/form/ResponseItem";

type ResponsesProps = {
  responses: IResponse[];
};
export const Responses: FC<ResponsesProps> = ({ responses }) => {
  return (
    <ResponsesLayout responses={responses}>
      {responses.map((response) => (
        <ResponseItem key={response.id} response={response} />
      ))}
    </ResponsesLayout>
  );
};
