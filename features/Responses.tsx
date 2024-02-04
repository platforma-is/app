import React, { FC } from "react";
import { IResponse } from "types";
import { ResponsesLayout } from "@/components/ResponsesLayout";

type ResponsesProps = {
  responses: IResponse[];
};
export const Responses: FC<ResponsesProps> = ({ responses }) => {
  return <ResponsesLayout responses={responses} />;
};
