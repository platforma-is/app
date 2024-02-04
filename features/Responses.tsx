import React, { FC } from "react";
import { IResponse } from "types";
import { ResponsesLayout } from "@/components/ResponsesLayout";
import { ResponseItem } from "@/features/ResponseItem";

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
