import { deleteFormApi } from "@/data/form";
import Router from "next/router";

export async function deleteForm(id: string): Promise<void> {
  await deleteFormApi(id);
  await Router.reload();
}
