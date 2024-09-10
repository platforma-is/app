import { getProviders } from "next-auth/react";
import { UseFormReturnType } from "@mantine/form";

export type TProvider = typeof getProviders;
export type FormControllerType<TValue> = UseFormReturnType<
  TValue,
  (values: TValue) => TValue
>;
