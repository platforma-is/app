import Router from "next/router";
import { deleteFormApi } from "@/features/form/queries";

export async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.reload();
}
